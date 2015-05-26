var User = function (email, password, avatarUrl) {
    this.email = email;
    this.password = password;
    this.avatarUrl = avatarUrl;
    this.krzycz = function () {
        alert(this.email.toUpperCase() + '!!!!!!1111oneone');
    };
};
var UserView = function (user) {
  this.element = document.createElement('li');
  this.avatarImg = document.createElement('img');
  this.mailLink = document.createElement('a');
  this.user = user;

  this.element.appendChild(this.avatarImg);
  this.element.appendChild(this.mailLink);

  this.refresh();
};

UserView.prototype.refresh = function () {
  this.avatarImg.src = this.user.avatarUrl;
  this.mailLink.href = 'mailto:' + this.user.email;
  this.mailLink.innerHTML = this.user.email;
};

var userList = {
    allUsers: [],
    addUser: function (user) {
        if (user instanceof User) {
            this.allUsers.push(user);
        }
    },
    login: function (email, password) {
        var i,
            currentUser;
        for (i = 0; i < this.allUsers.length; i++) {
            currentUser = this.allUsers[i];
            if (
                currentUser.email === email &&
                currentUser.password === password
            ) {
                return true;
            }
        }

        return false;
    }
};

var form = document.forms[0];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (userList.login(form.email.value, form.password.value)) {
        alert('Zalogowales sie, siema!');
    } else {
        alert('Bledny email lub haslo!');
    }
});

function createView(user)
{
  var userView = new UserView(userList.allUsers[i]);
  list.appendChild(userView.element);

}

var list = document.getElementsByTagName('ul')[0];
var zosia = new User('zosia.samosia@protonmail.ch', '123456', 'https://myworldofcmpunk.files.wordpress.com/2012/07/pics_in_a_pic_avatar_best_in_the_world_cm_punk_by_lovelives4ever-d5cxtt2.jpg');
var zosiaView = new UserView(zosia);
list.appendChild(zosiaView.element);

var michal = new User('michal.matulka@protonmail.ch', 'lla123', 'http://www.blogcdn.com/www.joystiq.com/media/2007/09/scrooge-mc-duck-swimming.jpg');
var michalView = new UserView(michal);
list.appendChild(michalView.element);

userList.addUser(zosia);
userList.addUser(michal);
