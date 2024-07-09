# Get Me A Chai

Get Me A Chai is a crowdfunding platform inspired by Patreon, built using Next.js and MongoDB. It allows creators to receive support from their fans and followers through recurring donations.

## Features

- User authentication and authorization
- Creator profiles
- Subscription-based support
- Payment integration
- Responsive design

## Tech Stack

- **Frontend:** Next.js, React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** NextAuth.js
- **Payment Integration:** Stripe (or any other payment gateway)
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ramishbinsiddique15/Get-Me-A-Chai.git
    cd get-me-a-chai
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root of your project and add the following environment variables:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_PUBLIC_KEY=your_stripe_public_key
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Using Tailwind CSS

Tailwind CSS is already set up in the project. You can start using Tailwind's utility classes in your components. For example:

```jsx
<div className="bg-gray-100 p-4 rounded-lg">
  <h1 className="text-2xl font-bold">Hello, world!</h1>
</div>
```
## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
