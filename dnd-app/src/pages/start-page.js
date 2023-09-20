import '../App.css';

function StartPage() {
  return (
    <div>
      <head>
          <title>D&D Character Creation App</title>
      </head>
      <body>
          <div class="container">
              <h1>Welcome to the D&D Character Creation App</h1>
              <p>Create your epic character and embark on adventures!</p>
              <button class="start-button" onclick="startCharacterCreation()">Start</button>
          </div>

          <script>
              function startCharacterCreation() {
                  // Add code to navigate to the character creation page here
                  // For example, you can use JavaScript to redirect to another page.
                  // window.location.href = "character-creation.html";
              }
          </script>
      </body>
    </div>
  );
}

export default StartPage;