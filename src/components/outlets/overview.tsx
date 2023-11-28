import Card from "../card";
import DigitalClock from "../cards/clock";
import CompletionChart from "../cards/completionChart";
import Pomodoro from "../cards/pomodoro";
import Quote from "../cards/quote";
import Spotify from "../cards/spotify";
import UpcomingTask from "../cards/upcomingTask";
import Weather from "../cards/weather";

const Overview = () => {
  return (
    <>
      <Card title={"Today"} content={<DigitalClock />}></Card>
      <Card title={"Current task"} content={<UpcomingTask index={0} />}></Card>
      <Card title={"Completion Ratio"} content={<CompletionChart />}></Card>
      <Card title={"Motivational Quote"} content={<Quote />}></Card>
      <Card title={"Weather"} content={<Weather />}></Card>
      <Card title={"Upcoming Task"} content={<UpcomingTask index={1} />}></Card>
      <Card title={"Pomodoro Timer"} content={<Pomodoro />}></Card>
      <Card title={"Spotify Music"} content={<Spotify />} bg="#b2598582"></Card>
    </>
  );
};

export default Overview;
