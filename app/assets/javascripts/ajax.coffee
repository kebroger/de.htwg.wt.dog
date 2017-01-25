root = exports ? this

root.fillSquares = (data)->
  $("#currentPlayer").text("Player " + data.game.currentPlayer.playerNumber)
  $("#info").text(data.game.info)

  for s, i in data.game.squares
    if s.token != -1
      $("#"+s.name).text('●')
    else
      $("#"+s.name).text('')

    if s.name.startsWith("S")
      $("#"+s.name).css("background", "linear-gradient(silver, gray)")

    if s.token == 0
      $("#"+s.name).css("background", "yellow")
    if s.token == 1
      $("#"+s.name).css("background", "blue")
    if s.token == 2
      $("#"+s.name).css("background", "green")
    if s.token == 3
      $("#"+s.name).css("background", "cyan")

  $('#cards .card').remove()
  for c, i in data.game.currentPlayer.cards
    $('#cards').append("<img class='card 'id=" + c.name + " onclick=send('card," + c.name + "') src='/assets/images/" + c.name + ".jpg'>")

  if data.game.selectedCard != null
    $("#"+ data.game.selectedCard.name).addClass("selected")

  for element, index in $('.field.selected1')
    $(element).removeClass("selected1")

  for element, index in $('.field.selected2')
    $(element).removeClass("selected2")

  if data.game.selectedSquare1 != null
    $("#"+ data.game.selectedSquare1.name).addClass("selected1")

  if data.game.selectedSquare2 != null
    $("#"+ data.game.selectedSquare2.name).addClass("selected2")


