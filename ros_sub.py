#!/usr/bin/env python3
import rospy
from geometry_msgs.msg import Twist


def callback(data):
    rospy.loginfo("%f %f %f %f %f", data.linear.x, data.linear.y,
                  data.linear.z, data.angular.x, data.angular.y)
    pub = rospy.Publisher('cmd_vel_auto', Twist, queue_size=10)
    x = data.linear.x
    y = data.linear.y
    val = Twist()
    val.linear.x = x
    val.angular.z = y

    pub.publish(val)


def listener():
    # In ROS, nodes are uniquely named. If two nodes with the same
    # name are launched, the previous one is kicked off. The
    # anonymous=True flag means that rospy will choose a unique
    # name for our 'listener' node so that multiple listeners can
    # run simultaneously.
    rospy.init_node('listener', anonymous=True)
    pub = rospy.Publisher('cmd_vel_auto', Twist, queue_size=10)
    rospy.Subscriber('ros_mobile', Twist, callback)

    # spin() simply keeps python from exiting until this node is stopped
    rospy.spin()


if __name__ == '__main__':
    listener()
