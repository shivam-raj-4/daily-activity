import React from "react";
import "./dashboard.css";
import { Chart } from "react-google-charts";
import jsonData from "../data/data-set.json"

export const Dashboard = () => {

    const activeHours = jsonData;

    function calculateActivity(activeHours) {
        const totalMinutes = 24 * 60;
        const activity = new Array(totalMinutes).fill(0);

        activeHours.forEach(({ start, end }) => {
            const [startHour, startMinute] = start.split(":").map(Number);
            const [endHour, endMinute] = end.split(":").map(Number);

            for (let i = startHour * 60 + startMinute; i < endHour * 60 + endMinute; i++) {
                activity[i] = 1;
            }
        });

        let r = [[]];
        r[0] = ["label", "hours"];
        let inactive = 0;
        let active = 0;

        for (let i = 0; i < totalMinutes; i++) {
            if (activity[i] === 0) {
                if (active > 0) {
                    r.push(["active", active]);
                    active = 0;
                }
                inactive++;
            } else {
                if (inactive > 0) {
                    r.push(["inactive", inactive]);
                    inactive = 0;
                }
                active++;
            }
        }

        if (active > 0) {
            r.push(["active", active]);
        } else if (inactive > 0) {
            r.push(["inactive", inactive]);
        }
        return r;
    }

    const result = calculateActivity(activeHours);

    const colors = ['#454444', '#9e97ee'];

    const assignAlternateColors = () => {
        const assignedColors = [];
        for (let i = 0; i < result.length - 1; i++) {
            assignedColors.push(colors[i % 2]); // Alternate between the two colors
        }
        return assignedColors;
    };

    const assignedColors = assignAlternateColors();

    const options = {
        pieHole: 0.8,
        backgroundColor: "#212121",
        pieSliceText: 'none',
        legend: 'none',
        tooltip: { trigger: 'none' },
        colors: assignedColors,
        pieSliceBorderColor: 'transparent',
    };

    return (
        <div className="assignment">
            <div className="div">
                <div className="overlap">
                    <div className="group">
                        <p className="about-flow-zone">
                            <span className="text-wrapper">About </span>
                            <span className="span">Flow Zone</span>
                        </p>
                    </div>
                    <img className="img" alt="Group" src={require('../assets/dropdown-icon.png')} />
                </div>
                <div className="overlap-group">
                    <div className="div-wrapper">
                        <div className="text-wrapper-2">Flow Peaks</div>
                    </div>
                    <img className="group-3" alt="Group" src={require("../assets/infoicon.png")} />
                    <div className="frame">
                        <div className="text-wrapper-3">Weekly</div>
                    </div>
                    <div className="overlap-2">
                        <div className="text-wrapper-4">My Flow Peaks</div>
                        <div className="text-wrapper-5">02PM - 08PM</div>
                        <img className="img-2" alt="Clockicon" src={require("../assets/clockicon.png")} />
                    </div>
                    <div className="overlap-3">
                        <div className="text-wrapper-4">Global Flow Peaks</div>
                        <div className="text-wrapper-5">04PM - 11PM</div>
                        <img className="img-2" alt="Time" src={require("../assets/time 1.png")} />
                    </div>
                    <div className="overlap-4">

                        <div className="chart-container">

                            <div className="chart-wrapper">
                                <Chart
                                    chartType="PieChart"
                                    width="260px"
                                    height="220px"
                                    data={result}
                                    options={options}
                                />
                            </div>
                            <div className="line left-line"></div>
                            <div className="line right-line"></div>

                        </div>
                        <div className="group-2">
                            <div className="line-wrapper">
                                <img className="line-3" alt="Line" src="line-44-2.svg" />
                            </div>
                            <div className="img-wrapper">
                                <img className="line-3" alt="Line" src="line-47-2.svg" />
                            </div>
                            <div className="overlap-6">
                                <img className="line-3" alt="Line" src="line-45-2.svg" />
                            </div>
                            <div className="overlap-7">
                                <img className="line-3" alt="Line" src="line-48-3.svg" />
                            </div>
                            <div className="overlap-8">
                                <img className="line-3" alt="Line" src="line-46-3.svg" />
                            </div>
                            <div className="overlap-9">
                                <img className="line-3" alt="Line" src="line-49-3.svg" />
                            </div>
                            <div className="overlap-10">
                                <img className="line-4" alt="Line" src="line-44-3.svg" />
                            </div>
                            <div className="overlap-11">
                                <img className="line-4" alt="Line" src="line-47-3.svg" />
                            </div>
                            <div className="overlap-12">
                                <img className="line-4" alt="Line" src="line-45-3.svg" />
                            </div>
                            <div className="overlap-13">
                                <img className="line-4" alt="Line" src="line-48-4.svg" />
                            </div>
                            <div className="overlap-14">
                                <img className="line-4" alt="Line" src="line-46-4.svg" />
                            </div>
                            <div className="overlap-15">
                                <img className="line-4" alt="Line" src="line-49-4.svg" />
                            </div>
                            <div className="overlap-16">
                                <img className="line-4" alt="Line" src="line-44-4.svg" />
                            </div>
                            <div className="overlap-17">
                                <img className="line-4" alt="Line" src="line-50-2.svg" />
                            </div>
                            <div className="overlap-18">
                                <img className="line-3" alt="Line" src="line-53.svg" />
                            </div>
                            <div className="overlap-19">
                                <img className="line-3" alt="Line" src="line-56.svg" />
                            </div>
                            <div className="overlap-20">
                                <img className="line-4" alt="Line" src="line-47-4.svg" />
                            </div>
                            <div className="overlap-21">
                                <img className="line-4" alt="Line" src="line-45-4.svg" />
                            </div>
                            <div className="overlap-22">
                                <img className="line-3" alt="Line" src="line-51-3.svg" />
                            </div>
                            <div className="overlap-23">
                                <img className="line-3" alt="Line" src="line-54-2.svg" />
                            </div>
                            <div className="overlap-24">
                                <img className="line-4" alt="Line" src="line-57-2.svg" />
                            </div>
                            <div className="overlap-25">
                                <img className="line-4" alt="Line" src="line-48-5.svg" />
                            </div>
                            <div className="overlap-26">
                                <img className="line-4" alt="Line" src="line-46-5.svg" />
                            </div>
                            <div className="overlap-27">
                                <img className="line-3" alt="Line" src="line-52-3.svg" />
                            </div>
                            <div className="overlap-28">
                                <img className="line-4" alt="Line" src="line-55-2.svg" />
                            </div>
                            <div className="overlap-29">
                                <img className="line-4" alt="Line" src="line-58-2.svg" />
                            </div>
                            <div className="overlap-30">
                                <img className="line-4" alt="Line" src="line-49-5.svg" />
                            </div>
                            <div className="overlap-31">
                                <img className="line-3" alt="Line" src="line-44-5.svg" />
                            </div>
                            <div className="overlap-32">
                                <img className="line-3" alt="Line" src="line-47-5.svg" />
                            </div>
                            <div className="overlap-33">
                                <img className="line-3" alt="Line" src="line-45-5.svg" />
                            </div>
                            <div className="overlap-34">
                                <img className="line-3" alt="Line" src="line-48-6.svg" />
                            </div>
                            <div className="overlap-35">
                                <img className="line-3" alt="Line" src="line-46-6.svg" />
                            </div>
                            <div className="overlap-36">
                                <img className="line-3" alt="Line" src="line-49-6.svg" />
                            </div>
                            <div className="overlap-37">
                                <img className="line-3" alt="Line" src="line-50-3.svg" />
                            </div>
                            <div className="overlap-38">
                                <img className="line-4" alt="Line" src="line-51-4.svg" />
                            </div>
                            <div className="overlap-39">
                                <img className="line-3" alt="Line" src="line-52-4.svg" />
                            </div>
                            <div className="overlap-40">
                                <img className="line-5" alt="Line" src="line-38-3.svg" />
                            </div>
                            <div className="overlap-41">
                                <img className="line-6" alt="Line" src="line-40-3.svg" />
                            </div>
                            <div className="overlap-42">
                                <div className="text-wrapper-6">2</div>
                                <div className="text-wrapper-6">2</div>
                            </div>
                            <div className="overlap-43">
                                <div className="text-wrapper-6">8</div>
                                <div className="text-wrapper-6">8</div>
                            </div>
                            <div className="overlap-44">
                                <div className="text-wrapper-7">10</div>
                                <div className="text-wrapper-7">10</div>
                            </div>
                            <div className="overlap-45">
                                <img className="line-7" alt="Line" src="line-27-2.svg" />
                            </div>
                            <div className="overlap-46">
                                <img className="line-8" alt="Line" src="line-35-2.svg" />
                            </div>
                            <div className="overlap-47">
                                <img className="line-7" alt="Line" src="line-28-2.svg" />
                            </div>
                            <div className="overlap-48">
                                <img className="line-5" alt="Line" src="line-37-3.svg" />
                            </div>
                            <div className="overlap-49">
                                <img className="line-6" alt="Line" src="line-39-3.svg" />
                            </div>
                            <div className="overlap-50">
                                <img className="line-5" alt="Line" src="line-37-4.svg" />
                            </div>
                            <div className="overlap-51">
                                <img className="line-6" alt="Line" src="line-39-4.svg" />
                            </div>
                            <div className="overlap-52">
                                <img className="line-5" alt="Line" src="line-38-4.svg" />
                            </div>
                            <div className="overlap-53">
                                <img className="line-6" alt="Line" src="line-40-4.svg" />
                            </div>
                            <div className="overlap-54">
                                <img className="line-8" alt="Line" src="line-36-2.svg" />
                            </div>
                            <div className="overlap-55">
                                <div className="text-wrapper-8">0</div>
                                <div className="text-wrapper-8">0</div>
                            </div>
                            <div className="overlap-56">
                                <div className="text-wrapper-9">18</div>
                                <div className="text-wrapper-9">18</div>
                            </div>
                            <div className="overlap-57">
                                <div className="text-wrapper-10">12</div>
                                <div className="text-wrapper-10">12</div>
                            </div>
                            <div className="overlap-58">
                                <div className="text-wrapper-8">6</div>
                                <div className="text-wrapper-8">6</div>
                            </div>
                            <div className="overlap-59">
                                <div className="text-wrapper-6">4</div>
                                <div className="text-wrapper-6">4</div>
                            </div>
                            <div className="overlap-60">
                                <div className="text-wrapper-7">14</div>
                                <div className="text-wrapper-7">14</div>
                            </div>
                            <div className="overlap-61">
                                <div className="text-wrapper-7">16</div>
                                <div className="text-wrapper-7">16</div>
                            </div>
                            <div className="overlap-62">
                                <div className="text-wrapper-11">20</div>
                                <div className="text-wrapper-11">20</div>
                            </div>
                            <div className="overlap-63">
                                <div className="text-wrapper-7">22</div>
                                <div className="text-wrapper-7">22</div>
                            </div>
                        </div>
                        <div className="text-wrapper-12">Night</div>
                        <div className="text-wrapper-13">Morning</div>
                        <div className="text-wrapper-14">Afternoon</div>
                        <div className="text-wrapper-15">Evening</div>
                    </div>

                </div>
                <div className="group-4">
                    <div className="text-wrapper-2">My Thriving Toolkit</div>
                </div>
                <div className="overlap-64">
                    <div className="overlap-65">
                        <div className="rectangle" />
                        <div className="rectangle-2" />
                        <div className="rectangle-3" />
                        <div className="rectangle-4" />
                        <div className="overlap-66">
                            <div className="rectangle-5" />
                            <div className="rectangle-6" />
                            <div className="text-wrapper-16">Affirmation</div>
                            <div className="text-wrapper-17">Thought Guides</div>
                        </div>
                        <div className="text-wrapper-18">For You</div>
                        <img className="globallyicon" alt="Globallyicon" src={require("../assets/globallyicon.png")} />
                        <div className="text-wrapper-19">Globally</div>
                        <img className="foryouicon" alt="Foryouicon" src={require("../assets/foryouicon.png")} />
                        <div className="frame-2">
                            <div className="text-wrapper-20">Explore</div>
                        </div>
                        <div className="frame-3">
                            <div className="text-wrapper-21">Memory Game</div>
                        </div>
                        <div className="text-wrapper-22">Lorem Ipsum</div>
                        <div className="text-wrapper-23">Lorem Ipsum</div>
                        <div className="text-wrapper-24">Lorem Ipsum</div>
                        <div className="text-wrapper-25">Lorem Ipsum</div>
                    </div>
                    <img className="group-5" alt="Group" src={require("../assets/gameconsole-icon.png")} />
                    <div className="text-wrapper-26">Games</div>
                    <div className="text-wrapper-27">Tools</div>
                    <div className="text-wrapper-28">Lessons</div>
                    <div className="text-wrapper-29">Clubs</div>
                    <img className="tools-icon" alt="Tools icon" src={require("../assets/tools-icon.png")} />
                    <img className="lessonsicon" alt="Lessonsicon" src={require("../assets/lessonsicon.png")} />
                    <img className="clubicon" alt="Clubicon" src={require("../assets/clubicon.png")} />
                </div>
                <div className="rectangle-7" />
                <div className="group-6">
                    <div className="overlap-67">
                        <div className="group-7">
                            <div className="text-wrapper-30">9:25</div>
                            <img className="group-8" alt="Group" src={require("../assets/network.png")} />
                            <img className="group-9" alt="Group" src={require("../assets/wifi.png")} />
                            <img className="group-10" alt="Group" src={require("../assets/battery.png")} />
                        </div>
                        <div className="text-wrapper-31">Flow Zone</div>
                        <div className="vector-wrapper">
                            <img className="vector" alt="Vector" src={require("../assets/back.png")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
