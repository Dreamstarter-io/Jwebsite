from .db import db
from datetime import datetime

class PayPalOrder(db.Model):
    __tablename__ = 'paypal_orders'

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.String(100), nullable=False, unique=True)
    status = db.Column(db.String(50), nullable=False)
    payer_email = db.Column(db.String(255))
    total = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "order_id": self.order_id,
            "status": self.status,
            "payer_email": self.payer_email,
            "total": self.total,
            "created_at": self.created_at.isoformat()
        }