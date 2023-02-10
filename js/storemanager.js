function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];


    //your code goes here
    prices[0] += increase;
    prices[1] += increase;
    prices[2] += increase;
    prices[3] += increase;

    console.log("[ " + prices[0] + ", " + prices[1] + ", " + prices[2] + ", " + prices[3] + " ]");

}