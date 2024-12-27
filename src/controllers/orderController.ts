import { Request, Response } from 'express';
import Order from '../models/Order';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate('product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrderSummary = async (req: Request, res: Response) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const summary = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo }
        }
      },
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 },
          totalReceived: {
            $sum: {
              $cond: [{ $eq: ['$status', 'Confirmed'] }, 1, 0]
            }
          },
          totalReturned: {
            $sum: {
              $cond: [{ $eq: ['$status', 'Returned'] }, 1, 0]
            }
          },
          onTheWay: {
            $sum: {
              $cond: [{ $eq: ['$status', 'Out for delivery'] }, 1, 0]
            }
          }
        }
      }
    ]);

    res.json(summary[0] || {
      totalOrders: 0,
      totalReceived: 0,
      totalReturned: 0,
      onTheWay: 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};