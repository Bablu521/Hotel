import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const connectDB = async function () {
    try {
        // Connect to the database
        await prisma.$connect();
        console.log("PostgreSQL database connected successfully!");

        // You can execute queries here if needed
        // const users = await prisma.user.findMany();
        // console.log(users);
    } catch (error) {
        console.error("Failed to connect to the database", error);
    } finally {
        // Close the connection when done
        await prisma.$disconnect();
    }
}

export default connectDB; 