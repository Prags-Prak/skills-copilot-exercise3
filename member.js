function skillsmember() {
    var skill = document.getElementById("skills").value;
    var skillList = document.getElementById("skillList");
    var li = document.createElement("li");
    var text = document.createTextNode(skill);
    li.appendChild(text);
    skillList.appendChild(li);
}   