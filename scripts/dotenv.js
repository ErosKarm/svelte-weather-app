import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
console.log(process.env.OPENWEATHERMAP_API_KEY);
