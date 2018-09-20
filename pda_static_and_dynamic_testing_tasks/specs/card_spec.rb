require('minitest/autorun')
require('minitest/rg')

require_relative('../testing_task_2.rb')
require_relative('../card.rb')

class CardsTest < MiniTest::Test

  def setup()
    @card1 = Card.new("hearts", 5)
    @card2 = Card.new("spades", 1)
  end

  def test_checkforace_true()
    result = CardGame.checkforAce(@card2)
    assert_equal(true, result)
  end

  def test_checkforace_false()
    result = CardGame.checkforAce(@card1)
    assert_equal(false, result)
  end

  def test_highest_card()
    result = CardGame.highest_card(@card1, @card2)
    assert_equal(@card1, result)
  end

  def test_highest_card_card2()
    result = CardGame.highest_card(@card2,@card1)
    assert_equal(@card1, result)
  end

  def test_cards_total()
    result = CardGame.cards_total([@card1, @card2])
    assert_equal("You have a total of 6", result)
  end

end
