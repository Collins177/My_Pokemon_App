# Welcome to My Pokemon App
***
hosted site: https://my-pokemon-app-eta.vercel.app/

## Task
The task was to create a multiple-page web application using ReactJS, centered around Pokémon data fetched from the PokéAPI. 
The main goals of the task includes, Pokémon Listing with Lazy Loading, Pokémon Detail Page, Search Functionality,
Error Handling, Component Organization and Styling, and Documentation
## Description
My Pokémon App is a dynamic web application that allows users to explore and search for Pokémon using the PokéAPI. 
The app provides an interactive experience with features like infinite scrolling, Pokémon detail views, 
and a search bar to filter Pokémon by name. Built with ReactJS, the application efficiently manages API 
requests and handles errors to ensure a smooth user experience.

    Key Features
        1. Explore Pokémon: Browse through an extensive list of Pokémon, 
           with lazy loading to dynamically fetch and display more as you scroll.
        2. Search Functionality: Use the search bar to quickly find specific Pokémon by name.
        3. Detailed Pokémon Views: Click on a Pokémon to view detailed information, 
           including its abilities, stats, and types. The background color of the detail view dynamically 
           adjusts based on the Pokémon's primary type.
        4. Error Handling: The application gracefully handles errors, such as network issues or invalid API requests, 
           ensuring stability even under poor conditions.


  Technical Specifications
        1. ReactJS: The app is built as a multiple-page application using ReactJS, 
           following best practices in component structuring and state management.
        2. Axios: Used for making API requests to the PokéAPI, with error handling 
           implemented for issues like no internet connection or bad requests.
        3. Lazy Loading: Implements infinite scrolling to load more Pokémon as the user scrolls down the list.
        4. Component Organization: Each React component is organized in its own file, with associated CSS for styling. 
           Additional components are located in the src/components/ directory.
        5. Styling: Creative and responsive design using CSS, with a focus on providing a visually appealing and user-friendly interface.

## Installation
    Install Node.js and npm
        React relies on Node.js and npm (Node Package Manager). You need to install them first:

        Download Node.js from nodejs.org.

        Install the LTS (Long-Term Support) version.
        npm comes bundled with Node.js.
        To check if Node.js and npm are installed correctly, open your terminal (Command Prompt, PowerShell, or terminal on Mac/Linux) and run:

        bash
        node -v
        npm -v


    To run this project locally, follow these steps:

      1. Clone the repository:
          bash
          git clone https://github.com/Collins177/My_Pokemon_App
          cd pokemon-app

      2. Install the necessary dependencies:
          bash
          npm install

      3. Run the application
         bash
         npm start

## Usage

    The usage of the app is straightforward and user-friendly, designed to let users easily browse, search, 
    and explore Pokémon data. Here's how you can interact with the app:

     Usage Instructions:
        Browse Pokémon:
        When you open the app, you'll see a list of Pokémon displayed. As you scroll down, the app will automatically load 
        more Pokémon through lazy loading, providing a seamless browsing experience without overwhelming the browser with 
        too much data at once.
        
        Search for Pokémon:
        At the top of the page, there is a search bar. Start typing the name of a Pokémon to filter the list and quickly find 
        the one you are looking for. The list will update in real time based on your input.
        
        View Pokémon Details:
        To see more information about a specific Pokémon, simply click on its thumbnail in the list.
        This will take you to a detailed page for that Pokémon, where you can view stats such as its abilities,
        height, weight, and type. The background of this page will be colored based on the Pokémon's primary type, 
        enhancing the user experience.


        visit:  https://my-pokemon-app-eta.vercel.app
### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>