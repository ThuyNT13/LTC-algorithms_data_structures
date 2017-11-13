describe('getMaxProfit()', function() {
  describe('returns the minimal loss', function() {
    it('-3 for [25, 18, 13, 10, 5, 1]', function() {
      var array = [25, 18, 13, 10, 5, 1];
      expect(getMaxProfit(array)).toEqual(-3);
    });
    it('-1 for [10, 9, 8, 7, 6, 4]', function() {
      var array = [10, 9, 8, 7, 6, 4];
      expect(getMaxProfit(array)).toEqual(-1);
    });
    it('-1 for [10, 8, 6, 5]', function() {
      var array = [10, 8, 6, 5];
      expect(getMaxProfit(array)).toEqual(-1);
    });
    it('0 for [9, 8, 7, 7, 7, 6]', function() {
      var array = [9, 8, 7, 7, 7, 6];
      expect(getMaxProfit(array)).toEqual(0);
    });
    it('0 for [12, 12, 11, 9, 3]', function() {
      var array = [12, 12, 11, 9, 3];
      expect(getMaxProfit(array)).toEqual(0);
    });
    it('returns loss for 2 indices', function() {
      expect(getMaxProfit([4,0])).toEqual(-4);
    });
  });

  describe('returns the highest profit', function() {
    it('6 for [10, 7, 5, 8, 11, 9]', function() {
      var array = [10, 7, 5, 8, 11, 9];
      expect(getMaxProfit(array)).toEqual(6);
    });
    it('10 for [21, 7, 5, 15, 1, 9]', function() {
      var array = [21, 7, 5, 15, 1, 9];
     expect(getMaxProfit(array)).toEqual(10);
    });
    it('12 for [9, 7, 8, 18, 3, 15]', function() {
      var array = [9, 7, 8, 18, 3, 15];
      expect(getMaxProfit(array)).toEqual(12);
    });
    it('returns gain for 2 indices', function() {
      expect(getMaxProfit([0,4])).toEqual(4);
    });
  });

  describe('throws an error when there are less than 2 prices.', function() {
    it('throws Error for [1]', function() {
      expect( function() {
        getMaxProfit([1]);
      } ).toThrow(new Error("At least 2 prices needed."));
    });
  });
});
