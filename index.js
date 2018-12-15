function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelectorAll('#grand-node div')[3]
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list')
  for (var i in rank) {
    rank[i].innerHTML = parseInt(rank[i]) + n
  }
}
