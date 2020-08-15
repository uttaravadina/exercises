# Multiplayer Realtime Stock Trading App

Create a multiplayer realtime stock trading app for users to buy/sell stock in realtime.

## Requirements

- Signup Page(First Name, Last Name, username(should be unique), password)
- Login Page
- New user gets \$2500 in their account upon successful Signup
- Homepage that shows all available stocks, their current prices, availability, and other users in the game
- The price of stocks change every 10s, based on your proprietary rule
- The rule for the new price of the stock is based on factors like demand for a stock, number of stocks purchased, percentage of that stock left for purchase, etc
- We should be able to see other users currently online, playing the stock game.
- We should also see some details like their percent worth increase/decrease over the last time interval, their sequence based on who has the higher net worth right now, who is holding how many stocks of the companies, etc
- Users get to BUY/SELL their stocks at any time

## Bonus Requirements

- Allow users to directly sell stocks to other users, bypassing the market price
- Common IRL like chatroom, where everyone playing the game can chat publicly
- Dashboard using [Highcharts](https://www.highcharts.com/)(lucrative for interviewers) showing how different users performed over time
- Graphs of how the different stocks of the company changed over time

## Stock Data Model

- Company name (e.g Zoom, Tesla, Google)
- Symbol (e.g ZM, TSLA, GOOGL)
- Logo Image
- Share price (Start with what's current, and change it every 10s based on your formula)
- Year IPOed
- Highest-ever price
- Lowest-ever price

> **Note:** Hosting project to cloud platform is mandatory. Without hosting your project, submission would not be considered and evaluated.
