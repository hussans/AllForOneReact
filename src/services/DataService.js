// Say Hello

export const greetUser = async (name) => {
    try {
      const response = await fetch(
        `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/HelloWorld/GreetUser/${name}`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};


// Ask Questions

export const askTwoQuestions = async (name, wakeTime) => {
    try {
      const response = await fetch(
        `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/TwoQuestion/TwoQuestions/${name}/${wakeTime}`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};


// Add Numbers

export const sumNumbers = async (number1, number2) => {
    try {
      const response = await fetch(
        `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/AddTwoNumbers/Sum/${number1}/${number2}`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};

// MadLib

export const generateMadLib = async (
    villageName,
    characterAdj,
    classType,
    characterName,
    year,
    treasureName,
    mentorName,
    companionName,
    villainName,
    eventLocation
  ) => {
    try {
      const response = await fetch(
        `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/Madlib/Adventure/${villageName}/${characterAdj}/${classType}/${characterName}/${year}/${treasureName}/${mentorName}/${companionName}/${villainName}/${eventLocation}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to generate story');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};


// Odd or Even

export const checkOddEven = async (number) => {
    try {
      const response = await fetch(
        `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/OddOrEven/Check/${number}`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};

// Reverse It

export const reverseInput = async (userInput) => {
    try {
      const response = await fetch(
        `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/ReverseIt/Reverse/${userInput}`
      );
      
      if (!response.ok) {
        throw new Error('Reversal failed');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};

// Reverse Numbers 

export const reverseNumbers = async (inputNumber) => {
    try {
      const response = await fetch(
        `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/ReverseIt/Reverse/${inputNumber}`
      );
      
      if (!response.ok) {
        throw new Error('Number reversal failed');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};

// Eight Ball

export const getEightBallAnswer = async (question) => {
    try {
      const response = await fetch(
        `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/MagicEightBall/AskAQuestion/${question}`
      );
      
      if (!response.ok) {
        throw new Error('Magic 8 Ball response failed');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};

// Greater Or Less Than

export const compareNumbers = async (num1, num2) => {
    try {
      const response = await fetch(
        `https://minichallengetwotofour-endpoints.azurewebsites.net/LessThenGreaterThen/lessThenGreaterThen/${num1}/${num2}`
      );
      
      if (!response.ok) {
        throw new Error('Comparison failed');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};

// Italian Restaurant

export const getItalianRestaurant = async () => {
    try {
      const response = await fetch(
        'https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/RestaurantPicker/PickItalianChineseOrMexican/italian'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};

// Mexican Restaurant

export const getMexicanRestaurant = async () => {
    try {
      const response = await fetch(
        'https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/RestaurantPicker/PickItalianChineseOrMexican/mexican'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};

// Chinese Restaurant

export const getChineseRestaurant = async () => {
    try {
      const response = await fetch(
        'https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/RestaurantPicker/PickItalianChineseOrMexican/chinese'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant');
      }
      
      return await response.text();
    } catch (error) {
      throw error;
    }
};