# Web-GUI

Welcome to the repository for the Web-GUI project. This interface provides continuous visualization of sensor data, power calculations, task switching, and video feed monitoring to ensure seamless control and operation of the rover.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Introduction

The Web-GUI is an integral part of rover control system, providing a user-friendly interface for real-time monitoring and control. Developed using modern web technologies, the interface facilitates efficient task management and data visualization.

## Features

- **Real-Time Sensor Data Visualization**: View live data from various sensors integrated into the rover.
- **Video Feed Monitoring**: Stream live video feeds from the rover's cameras.
- **Power Management**: Monitor battery levels and power consumption.
- **Task Switching**: Seamlessly switch between different operational modes (Manual, Autonomous, Manipulator).
- **Control Interface**: User-friendly controls for teleoperation and task execution.
- **Panoramic View Creation**: Generate and view panoramic images from camera feeds.

## Technologies Used

- **Node.js**: Backend server
- **npm**: Package manager
- **HTML5**: Structure and layout
- **CSS3**: Styling
- **JavaScript**: Interactivity and logic
- **WebSocket**: Real-time communication
- **MJPG-Streamer**: Video feed streaming
- **ROS (Robot Operating System)**: Backend integration with rover systems

## Usage

1. **Monitor and Control the Rover**
   Use the interface to view sensor data, monitor video feeds, and control the rover's operations.

## Configuration

### WebSocket Configuration

Ensure the WebSocket server is correctly configured to communicate with the rover. Update the server address and port in the `config.js` file.

### ROS Integration

Make sure ROS is set up on the rover and the Web-GUI server can communicate with it. Configure the necessary ROS topics and services in the `rosbridge` configuration.

## Contributing

We welcome contributions to improve the Web-GUI. If you would like to contribute, please follow these steps:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```sh
   git checkout -b feature/YourFeature
   ```
3. **Commit Your Changes**
   ```sh
   git commit -m 'Add Your Feature'
   ```
4. **Push to the Branch**
   ```sh
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or further information, please contact me.
