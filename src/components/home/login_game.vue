<template>

  <div id="login_game" class="container">

    <div class="new_game">

      <div class="row">

        <div class="col text-center">

          <div class="box">

            <h2>
              Connecte toi
            </h2>

            <div id="deviceready" class="blink" style="display: none;">
              <p class="event listening">Connecting to Device</p>
              <p class="event received">Device is Ready</p>
            </div>
            <div>
              <p class="login hidden"><button id="login">Log in</button></p>
              <p id="name" class="logout hidden"></p>
              <p id="score" class="logout hidden"></p>
              <p class="logout hidden"><button id="addscore">Add 10 points</button></p>
              <p class="logout hidden"><button id="showallleaderboards">Show all leaderboards</button></p>
              <p class="logout hidden"><button id="showleaderboard">Show leaderboard</button></p>
              <p class="logout hidden"><button id="showachievements">Show achievements</button></p>
              <p class="logout hidden"><button id="logout">Log out</button></p>
            </div>

            <form id="connexion_game" method="POST">

              <div class="body">

                <div class="lds-ring">

                  <h3>Chargement de ton compte en cours...</h3>

                  <img src="../../../public/img/clock-loading.gif" alt="">
                </div>

                <div class="message_success">
                  <img src="../../../public/img/message-check.png" alt="">
                  <h3></h3>
                  <p></p>
                </div>

                <div class="form">
                  <label for="pseudo_login" class="form-label">Ton pseudo</label>
                  <input type="text" class="form-control" name="pseudo_login" required>
                </div>

                <div class="form show_hide_password">
                  <label for="password_login" class="form-label">Ton mot de passe</label>

                  <div style="display: flex;align-items: center;gap: 15px;">
                    <input type="password" class="form-control" name="password_login" required>
                    <div class="input-group-addon">
                      <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>

                <div class="verification">
                  <label for="code_login" class="form-label">Code reçu par email</label>
                  <input type="number" maxlength="6" min="6" max="6" class="form-control" name="code_login">
                </div>

              </div>

              <div class="footer">
                <input type="submit" id="btn_login_games" class="btn_play form mt-0" value="Jouer" />
                <a id="quit_new_game" class="btn_exit">Quitter</a>
              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

function onDeviceReady() {

  $('#deviceready').show()

  var app = {
    services: cordova.plugins && cordova.plugins.playGamesServices,
    leaderBoardId: "CgkIkI-Px4kVEAIQAQ",
    score: 0,

    loginRelatedContainers: (function () {
      return Array.from(document.querySelectorAll('.login'));
    })(),

    logoutRelatedContainers: (function () {
      return Array.from(document.querySelectorAll('.logout'));
    })(),

    nameContainer: (function () {
      return document.getElementById('name');
    })(),

    scoreContainer: (function () {
      return document.getElementById('score');
    })(),

    addScoreButton: (function () {
      return document.getElementById('addscore');
    })(),

    showAllLeaderboardsButton: (function () {
      return document.getElementById('showallleaderboards');
    })(),

    showLeaderboardButton: (function () {
      return document.getElementById('showleaderboard');
    })(),

    showAchievementsButton: (function () {
      return document.getElementById('showachievements');
    })(),

    loginButton: (function () {
      return document.getElementById('login');
    })(),

    logoutButton: (function () {
      return document.getElementById('logout');
    })(),

    initialize: function () {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      this.loginButton.addEventListener('click', this.onLoginButtonClicked.bind(this), false);
      this.logoutButton.addEventListener('click', this.onLogoutButtonClicked.bind(this), false);
      this.addScoreButton.addEventListener('click', this.onAddScoreButtonClicked.bind(this), false);
      this.showAllLeaderboardsButton.addEventListener('click', this.onShowAllLeaderboardsButtonClicked.bind(this), false);
      this.showLeaderboardButton.addEventListener('click', this.onShowLeaderboardButtonClicked.bind(this), false);
      this.showAchievementsButton.addEventListener('click', this.onShowAchievementsButtonClicked.bind(this), false);
    },

    onDeviceReady: function () {
      this.services = cordova.plugins.playGamesServices;
      var self = this;
      this.receivedEvent('deviceready');
      this.services.isSignedIn(function (response) {
        if (response.isSignedIn) {
          self.loggedIn();
        } else {
          self.loggedOut();
        }
      });
    },

    onShowAchievementsButtonClicked: function () {
      this.services.showAchievements();
    },

    onAddScoreButtonClicked: function () {
      var self = this;
      var newScore = this.score + 10;
      this.services.submitScoreNow({
        leaderboardId: self.leaderBoardId,
        score: newScore
      }, function (response) {
        self.setScore(response.rawScore);
      });
    },

    onShowAllLeaderboardsButtonClicked: function () {
      this.services.showAllLeaderboards();
    },

    onShowLeaderboardButtonClicked: function () {
      this.services.showLeaderboard({
        leaderboardId: this.leaderBoardId
      });
    },

    onLoginButtonClicked: function () {
      var self = this;
      this.services.auth(function () {
        self.loggedIn();
      }, function () {
        self.loggedOut();
      });
    },

    onLogoutButtonClicked: function () {
      var self = this;
      this.services.signOut(function () {
        self.loggedOut();
      });
    },

    setScore: function (score) {
      this.score = score;
      this.scoreContainer.innerText = 'Score: ' + score;
    },

    loggedIn: function () {
      var self = this;
      this.services.showPlayer(function (response) {
        self.nameContainer.innerText = 'Hello ' + response.displayName;
      });
      this.services.getPlayerScore({ leaderboardId: self.leaderBoardId }, function (response) {
        self.setScore(response.playerScore);
      });
      this.loginRelatedContainers.forEach(function (value) {
        value.setAttribute('style', 'display:none;');
      });
      this.logoutRelatedContainers.forEach(function (value) {
        value.setAttribute('style', 'display:block;');
      });
    },

    loggedOut: function () {
      this.loginRelatedContainers.forEach(function (value) {
        value.setAttribute('style', 'display:block;');
      });
      this.logoutRelatedContainers.forEach(function (value) {
        value.setAttribute('style', 'display:none;');
      });
    },

    receivedEvent: function (id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
    }
  };

  app.initialize();

}

document.addEventListener('deviceready', function () {
  onDeviceReady()
});

export default defineComponent({
  name: 'LoginGameComponent'
})
</script>
