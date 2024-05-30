# Angular 17 - Payment Details Manager

This is an Angular application for managing payment details. The application allows you to create, read, update, and delete payment details.

## Technologies Used

- Angular
- TypeScript
- ASP.NET Core Web API

## Features

- View all payment details
- Add a new payment detail
- Update an existing payment detail
- Delete a payment detail

## Project Structure

The project is structured into several parts:

- `PaymentDetailService`: This is an Angular service that handles communication with the server. It uses the `HttpClient` module to send HTTP requests.

- `PaymentDetail`: This is a model class that represents a payment detail. It includes properties like `paymentDetailId`, `cardOwnerName`, `cardNumber`, `expirationDate`, and `securityCode`.

- `PaymentDetailsComponent`: This is an Angular component that displays the list of payment details. It uses the `PaymentDetailService` to fetch the data.

- `PaymentDetailFormComponent`: This is an Angular component that provides a form for adding and updating payment details. It also uses the `PaymentDetailService` to send the data to the server.

## Setup

To run this project, you need to have Node.js and Angular CLI installed on your machine. Then, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/angular-17-payment-manager.git`
2. Navigate into the project directory: `cd angular-17-payment-manager`
3. Install the dependencies: `npm install`
4. Start the development server: `ng serve`
5. Open your browser and navigate to `http://localhost:4200`

## Contributing

Contributions are welcome! Please read the contributing guide to learn how to contribute to this project.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
