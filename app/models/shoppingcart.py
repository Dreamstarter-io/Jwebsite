# from .db import db, environment, SCHEMA
# from datetime import datetime
# from .db import db, environment, SCHEMA, add_prefix_for_prod
# from werkzeug.security import generate_password_hash, check_password_hash

# class ShoppingCart(db.Model):
#     __tablename__ = 'shopping_cart'

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
#     product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
#     quantity = db.Column(db.Integer, nullable=False)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)

#     user = db.relationship("User", back_populates="cart_items")
#     product = db.relationship("Product", back_populates="cart_items")


# from .db import db, environment, SCHEMA, add_prefix_for_prod
# from datetime import datetime

# class ShoppingCart(db.Model):
#     __tablename__ = "shopping_cart"

#     if environment == "production":
#         __table_args__ = {"schema": SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
#     product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
#     quantity = db.Column(db.Integer, nullable=False, default=1)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)

#     user = db.relationship("User", back_populates="cart_items")
#     product = db.relationship("Product", back_populates="cart_items")
from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class ShoppingCart(db.Model):
    __tablename__ = "cart_items"   # ✅ renamed from "shopping_cart"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=1)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # relationships
    user = db.relationship("User", back_populates="cart_items")
    product = db.relationship("Product", back_populates="cart_items")

    def to_dict(self):
        """Return cart item with product info included (safe for frontend)."""
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "quantity": self.quantity,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            # flatten product details
            "title": getattr(self.product, "title", None),
            "price": str(getattr(self.product, "price", 0)),  # string avoids float issues
            "cover_image_url": getattr(self.product, "cover_image_url", None),
        }