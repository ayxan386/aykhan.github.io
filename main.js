window.onload = () => {
  let projects = [];
  data.forEach((el, i) => {
    projects.push(
      "<div class='project' onclick='show(" + i + ")' data-index=" + i + ">"
    );
    projects.push(
      `<img src='${el.src}' alt='${el.name}' class="project-picture"/>`
    );
    projects.push(`<header>${el.name}</header>`);
    projects.push("<div class='reps'>");
    if (el.github)
      projects.push(`<a href='${el.github}'target="_blank">Git</a>`);
    if (el.glitch)
      projects.push(`<a href='${el.glitch}'target="_blank">Glich</a>`);
    if (el.codepen)
      projects.push(`<a href='${el.codepen}'target="_blank">Codepen</a>`);
    projects.push("</div>");
    projects.push("</div>");
  });
  $("#projects").html(projects.join(""));
};
function show(index) {
  const project = data[index];
  let html = [];
  html.push("<i class='fa fa-x exit' onclick='unshow()'>X</i>");
  html.push("<div class='flex-column'>");
  html.push(`<img src='${project.src}'/>`);
  html.push("<div class='external-links'>");
  if (project.github)
    html.push(`<a href='${project.github}'target="_blank">Git</a>`);
  if (project.glitch)
    html.push(`<a href='${project.glitch}'target="_blank">Glitch</a>`);
  if (project.codepen)
    html.push(`<a href='${project.codepen}'target="_blank">Codepen</a>`);
  html.push("</div>");

  html.push("<div class='tags'>");
  if (project.tags) {
    project.tags.forEach(el => {
      html.push(`<div class='tag'>${el}</div>`);
    });
  } else {
    html.push("No tags provided");
  }
  html.push("</div>");
  html.push("</div>");
  $("#info")
    .html(html.join(""))
    .css({ display: "block" });
  $("#header").css({
    zIndex: 1
  });
}
function unshow() {
  $("#info")
    .html("")
    .css({ display: "none" });
  $("#header").css({
    zIndex: 20
  });
}

window.onkeydown = e => {
  if (e.key === "Escape") {
    unshow();
  }
};
