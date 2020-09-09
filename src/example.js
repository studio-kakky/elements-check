const areExist = function(elements) {
  return Object.keys(elements).every(function(key) {
    const el = elements[key];
    return el.length > 0;
  })
};

(function(){
  const targetElements = {
    $el1: $('.some-classA'),
    $el2: $('div.some-classB')
  }

  // 対象の要素が1つでもなかったら何もせずに終了
  if (!areExist(targetElements)) {
    console.log('noElement')
    return
  }

  // 以下に施策を書く
  targetElements.$el1.hide()
  targetElements.$el2.hide()
})();
