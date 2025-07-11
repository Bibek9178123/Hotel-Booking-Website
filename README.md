# Hotel Booking Platform

A full-stack hotel booking platform built with React frontend and Node.js backend.

## Project Structure

```
hotel booking platform/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── signin.js
│   │   └── user.js
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── 4788-180289892.mp4
│   │   ├── hotelbay-logo.png
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookingModal.js
│   │   │   ├── Footer.js
│   │   │   ├── GuestSelector.js
│   │   │   ├── Header.js
│   │   │   ├── HeroGlobe.js
│   │   │   ├── HeroSection.js
│   │   │   ├── HotelList.js
│   │   │   ├── HotelSearch.js
│   │   │   ├── NavBar.js
│   │   │   ├── SearchBar.js
│   │   │   ├── SignIn.js
│   │   │   └── SignUp.js
│   │   ├── data/
│   │   │   └── hotelsData.js
│   │   ├── pages/
│   │   │   ├── BookingHotel.js
│   │   │   ├── Home.js
│   │   │   ├── HotelDetails.js
│   │   │   ├── HotelPage.js
│   │   │   ├── Payment.js
│   │   │   └── Profile.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
└── .dist/
```

## Features

### Frontend Features
- **User Authentication**: Sign in and sign up functionality
- **Hotel Search**: Search hotels with various filters
- **Hotel Listings**: Browse available hotels
- **Hotel Details**: View detailed information about hotels
- **Booking System**: Book hotels with guest selection
- **Payment Integration**: Handle payments for bookings
- **User Profile**: Manage user profile and bookings
- **Responsive Design**: Works on desktop and mobile devices

### Backend Features
- **RESTful API**: Clean API endpoints for frontend integration
- **User Management**: User registration and authentication
- **Authentication Middleware**: Secure routes with JWT tokens
- **Database Models**: User model for data persistence
- **Environment Configuration**: Secure configuration management

## Technology Stack

### Frontend
- **React.js**: Frontend framework
- **JavaScript**: Primary programming language
- **HTML5 & CSS3**: Markup and styling
- **React Router**: Navigation and routing

### Backend
- **Node.js**: Server runtime
- **Express.js**: Web framework
- **MongoDB**: Database (implied from User model)
- **JWT**: Authentication tokens
- **Middleware**: Custom authentication middleware

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "hotel booking platform"
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Setup**
   - Create a `.env` file in the backend directory
   - Add your environment variables (database URL, JWT secret, etc.)

5. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```

## API Endpoints

### Authentication
- `POST /signin` - User login
- `POST /user` - User registration/management

### Protected Routes
- Routes protected by authentication middleware
- JWT token required for access

## Components Overview

### Core Components
- **NavBar**: Navigation bar with user options
- **Header**: Page header component
- **Footer**: Page footer component
- **HeroSection**: Landing page hero section
- **HeroGlobe**: Interactive globe component

### Search & Booking Components
- **SearchBar**: Hotel search functionality
- **HotelSearch**: Advanced search filters
- **HotelList**: Display search results
- **GuestSelector**: Select number of guests
- **BookingModal**: Booking confirmation modal

### User Components
- **SignIn**: User login form
- **SignUp**: User registration form
- **Profile**: User profile management

### Pages
- **Home**: Landing page
- **HotelPage**: Hotel listings page
- **HotelDetails**: Individual hotel details
- **BookingHotel**: Booking confirmation page
- **Payment**: Payment processing page

## Data Management
- **hotelsData.js**: Contains hotel information and mock data
- **User.js**: User model for database operations

## Development

### File Structure Guidelines
- Components are organized by functionality
- Pages represent different routes/views
- Data files contain mock or static data
- Middleware handles cross-cutting concerns

### Styling
- Component-specific styles
- Responsive design principles
- Modern UI/UX patterns

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.
