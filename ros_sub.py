#!/usr/bin/env python3

import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist

class ListenerNode(Node):

    def __init__(self):
        super().__init__('listener')
        self.pub = self.create_publisher(Twist, 'cmd_vel_auto', 10)
        self.sub = self.create_subscription(Twist, 'ros_mobile', self.callback, 10)

    def callback(self, data):
        self.get_logger().info(f"{data.linear.x} {data.linear.y} {data.linear.z} {data.angular.x} {data.angular.y}")
        
        val = Twist()
        val.linear.x = data.linear.x
        val.angular.z = data.linear.y
        self.pub.publish(val)

def main(args=None):
    rclpy.init(args=args)
    node = ListenerNode()
    rclpy.spin(node)
    
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
