/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(AIzaSyAaT9On24qCb8LHHJoXmX-BBxX6dod4Y-g);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Here is an article about exciting things to do in New York City. Convert this into a structured format with 3 columns - activity, best season to partake in this activity, and amount of time needed.\n\nNew York City vibrates with an irresistible energy that never sleeps, offering an abundance of experiences for every traveler! In the pleasant embrace of spring or the colorful tapestry of fall, dedicate a half or even a full day to exploring the sprawling expanse of Central Park. Take a leisurely bike ride, enjoy a picnic lunch, or rent a boat on the lake – the possibilities for enjoyment are endless! Regardless of the season, art enthusiasts can immerse themselves in the vast collection of the Metropolitan Museum of Art, dedicating an afternoon to wander through centuries of human creativity.\n\nFor a dose of captivating entertainment, catch a world-renowned Broadway show, a three-hour journey into the heart of theater and music. Spring or fall offers the ideal weather for a ferry ride to the Statue of Liberty and Ellis Island, allowing for a half or full day to delve into the stories of immigration and freedom that shaped America. When the weather beckons you outdoors in the summer months, dedicate an hour to a stroll along the High Line, a unique elevated park offering breathtaking city views and urban gardens.\n\nAs dusk settles, head to the dazzling spectacle of Times Square, spending thirty minutes to an hour soaking in the vibrant lights and bustling energy. For a moment of reflection, visit the poignant 9/11 Memorial & Museum, dedicating two to three hours to honor the lives lost and the unwavering spirit of the city. From the trendy streets of Soho to the historic charm of Greenwich Village, exploring the diverse neighborhoods of New York City is an adventure in itself, with the time commitment varying based on your chosen area and interests. And for those seeking a taste of the city's vibrant culture, a two-hour hour food tour will tantalize your taste buds with diverse flavors and culinary delights.\n\nNo matter your interests or the time of year, New York City promises an unforgettable experience, brimming with iconic sights, captivating performances, and endless opportunities for exploration!"},
            {text: "Need to collect Infromation for new user forAir travel by bot\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## Exciting Things to Do in New York City\n\n| Activity | Best Season | Time Needed |\n|---|---|---|\n| Explore Central Park (bike ride, picnic, boat ride) | Spring or Fall | Half day to Full day |\n| Visit the Metropolitan Museum of Art | Any season | Afternoon |\n| Watch a Broadway Show | Any season | 3 hours |\n| Ferry ride to Statue of Liberty & Ellis Island | Spring or Fall | Half day to Full day |\n| Stroll along the High Line | Summer | 1 hour |\n| Visit Times Square | Any season | 30 minutes to 1 hour |\n| Visit the 9/11 Memorial & Museum | Any season | 2 to 3 hours |\n| Explore neighborhoods (Soho, Greenwich Village, etc.) | Any season | Varies based on area and interests |\n| Food tour | Any season | 2 hours | \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Need to collect Infromation for   Air travel by the bot for new users \n\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I can help you outline what information a bot would need to collect from a new user for air travel booking. Here's a breakdown of the key information categories and examples of specific questions:\n\n**1. Trip Details:**\n\n* **Destination:**  \n    * Where are you flying to? (City and country)\n    * What is your destination airport code?\n* **Travel Dates:**\n    * When are you traveling? (Departure date)\n    * How long will you be gone? (Return date or length of stay) \n* **Number of Travelers:**\n    * How many people will be traveling? (Adults, children, infants)\n* **Cabin Class:**\n    * What type of cabin class are you looking for? (Economy, Premium Economy, Business, First)\n\n**2. Passenger Information:**\n\n* **Full Name:** \n    * Please enter your full name (as it appears on your passport or ID).\n* **Contact Information:**\n    * What is your email address?\n    * What is your phone number?\n* **Passport Information:**\n    * Do you have a passport? \n    * What is your passport number? (Optional: Expiration date)\n\n**3. Travel Preferences:**\n\n* **Flight Preferences:**\n    * Do you have any specific airlines you prefer?\n    * Are you open to connecting flights or do you prefer non-stop?\n    * Are you flexible with your departure/arrival times?\n* **Budget:**\n    * What is your approximate budget for airfare? (This can help filter options)\n\n**4. Additional Information:**\n\n* **Special Needs:**\n    * Do you require any special assistance (e.g., wheelchair, medical needs)?\n    * Do you have any dietary restrictions?\n* **Bags:**\n    * How many checked bags will you have? (Cost of checked bags can vary by airline)\n    * Will you have carry-on luggage?\n* **Loyalty Programs:**\n    * Are you a member of any frequent flyer programs? \n\n**How the Bot Uses This Information:**\n\nThe bot will use this information to:\n\n* **Search for Flights:** It will query flight databases and search for flights that match the user's criteria. \n* **Filter Results:** It will use the budget, preferences, and special needs to narrow down the search results and display relevant options.\n* **Provide Flight Options:** The bot will present flight details, including prices, flight times, airlines, and layover information. \n* **Guide Booking Process:** The bot will help the user proceed through the booking process, potentially linking to an airline's website or handling the booking itself (if it's integrated with an airline booking system).\n\n**Remember:** This is just a starting point. The specific information collected and how the bot is designed will depend on the features and functionality of the travel booking platform you are building. \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Need to collect basic information from the new user for air teavel by the bot."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "You got it! Here's a concise list of the absolute basic information a bot would need from a new user to start an air travel booking process:\n\n**1. Destination:**\n\n* **Where are you flying to?** (City and country) \n\n**2. Travel Dates:**\n\n* **When are you traveling?** (Departure date)\n\n**3. Number of Travelers:**\n\n* **How many people will be traveling?** (Adults, children, infants)\n\n**4.  Budget (Optional, but helpful):**\n\n* **What is your approximate budget for airfare?** (This helps filter results)\n\n**This is the bare minimum!** It lets the bot start finding potential flights right away. \n\n**Example of a Bot Conversation:**\n\n**Bot:**  Welcome! I can help you book your flight.  Where are you flying to? \n\n**User:**  I'm going to Paris, France.\n\n**Bot:**  Great! When are you traveling? \n\n**User:**  On June 15th.\n\n**Bot:**  Okay, and how many people will be traveling? \n\n**User:** Just me. \n\n**Bot:**  (Optional) Do you have a rough idea of your budget?\n\n**User:**  Around $1000.\n\n**Bot:**  Perfect! I'm finding some options for you now...\n\nThis basic information helps the bot start the search and provide initial flight suggestions. It can then ask more detailed questions as needed (like return date, cabin class, etc.) to refine the results and guide the user through the booking process. \n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();