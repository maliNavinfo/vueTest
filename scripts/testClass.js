//定义类
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }

    /**
     *  颠三倒四
     * @returns [] 数组
     * @memberof Point 点
     */
    test() {
        console.info('test');
        return [];
    }
}
