import sqlite3
import json
import os
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(__file__), 'data.db')

# Initialize DB and table
_conn = sqlite3.connect(DB_PATH, check_same_thread=False)
_conn.execute('''
CREATE TABLE IF NOT EXISTS user_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT,
    event_type TEXT,
    payload TEXT,
    ts TEXT
)
''')
_conn.commit()


def track(user_id: str, event_type: str, payload: dict):
    ts = datetime.utcnow().isoformat()
    _conn.execute('INSERT INTO user_events (user_id, event_type, payload, ts) VALUES (?, ?, ?, ?)',
                  (user_id, event_type, json.dumps(payload), ts))
    _conn.commit()


def list_events(limit: int = 100):
    cur = _conn.execute('SELECT id, user_id, event_type, payload, ts FROM user_events ORDER BY id DESC LIMIT ?', (limit,))
    rows = cur.fetchall()
    results = []
    for r in rows:
        results.append({
            'id': r[0],
            'user_id': r[1],
            'event_type': r[2],
            'payload': json.loads(r[3]) if r[3] else None,
            'ts': r[4]
        })
    return results

