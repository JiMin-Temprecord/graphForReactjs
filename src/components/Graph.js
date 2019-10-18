import React from "react"
import Highcharts from 'highcharts/highstock'

class Graph extends React.Component 
{

	left = 0;
	top = 0;

	state = {
		isCommentBoxVisible: false,
		isContextMenuVisible: false,
        isCancelBoxVisible: false,
        isMaximumVisible: true,
        isSummaryPageVisible: true,
        isStatisticPageVisible: false,
        isSectionFourVisible: false,
        isSaveVisible: false,
        isExportVisible: false
	}

    render(){
        return (
            <div className= "gridsystem">
                <div id="section-one">
                    <div></div>
                    <div>
                    <button className="graphButton" id="Reset" onMouseUp={Reset}><img src="https://www.temprecord.com/Graph/Images/reset.png" height={48} width={48} alt="Reset" />RESET Zoom</button>
                    </div>
                    <div>
                        <button className="graphButton" id="ZoomInY" onMouseUp={ZoomInY} ><img src="https://www.temprecord.com/Graph/Images/zoomInY.png" height={48} width={48} alt="ZoomInY"/>Zoom In Y</button>
                    </div>
                    <div>
                        <button className="graphButton" id="ZoomOutY" onMouseUp={ZoomOutY}><img src="https://www.temprecord.com/Graph/Images/zoomOutY.png" height={48} width={48} alt="ZoomOutY"/>Zoom Out Y</button>
                    </div>
                    <div>
                        <button className="graphButton" id="ZoomInX"onMouseUp={ZoomInX}><img src="https://www.temprecord.com/Graph/Images/zoomInX.png" height={48} width={48} alt="ZoomInX"/>Zoom In X</button>
                    </div>
                    <div>
                        <button className="graphButton" id="ZoomOutX"onMouseUp={ZoomOutX}><img src="https://www.temprecord.com/Graph/Images/zoomOutX.png" height={48} width={48} alt="ZoomOutY"/>Zoom Out X</button>
                    </div>
                    <div>    
                        <button className="graphButton" id="showLimits"onMouseUp={showLimits}><img src="https://www.temprecord.com/Graph/Images/showSelectedY.png" height={48} width={48} alt="showLimits"/>Show Limits</button>
                    </div>
                    <div>    
                        <button className="graphButton" id="showSelectSamples"onMouseUp={showSelectSamples}><img src="https://www.temprecord.com/Graph/Images/showSelectedX.png" height={48} width={48} alt="showSelectedSamples"/>Show Select</button>
                    </div>
                    <div className="tickbox">
                        <div>
                            <input type="checkbox" id="HideGray" className="hideAllTraces" onMouseUp={HideGray}/> Hide Gray 
                        </div>
                        <div>
                            <input type="checkbox" id="ShowLimit" className="showAllLimit" onMouseUp={ShowAllLimit}/> Show All Limits
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <img className="image" src="https://www.temprecord.com/Graph/Images/greentick.png" alt="limitImage" id="image" align="right" />
                    </div>
                </div>
				<div id="section-two">
                    <div id="container" onClick={() => this.setState({isContextMenuVisible: false})} onContextMenu= {(event) => { event.preventDefault(); this.left = event.clientX;this.top=event.clientY; this.setState({isContextMenuVisible: true})}} onDoubleClick={DoubleClick(this.state)}/>
                    <div id="tab">
                        <div>
                            <button id="serialnumber"></button>
                        </div>
                    </div>
                </div>
                <div id="section-three">
                    <div>
                        <input type="file" name="file" multiple id="file" className="input" multiple onChange={handleFileSelect} />
                        <label for="file" className="logger" id="open"><img src="https://www.temprecord.com/Graph/Images/open.png"/>OPEN</label>
                    </div>
                    <div>
                        <button className="logger" id="save" onClick={()=> {this.setState({isSaveVisible: true})}}><img src="https://www.temprecord.com/Graph/Images/save.png"/>SAVE</button>    
                    </div>
                    <div>
                        <button className="logger" id="print" onClick={()=>{{window.print();}}}><img src="https://www.temprecord.com/Graph/Images/print.png"/>PRINT</button>    
                    </div>
                    <div>
                        <button className="logger" id="email" onClick={()=>{{window.open('mailto:');}}}><img src="https://www.temprecord.com/Graph/Images/email.png"/>EMAIL</button>    
                    </div>
                    <div>
                        <button className="logger" id="export" onClick={()=> {this.setState({isExportVisible: true})}}><img src="https://www.temprecord.com/Graph/Images/export.png"/>EXPORT</button>    
                    </div>
                    <div className="save" id="savemenu" style={{display: this.state.isSaveVisible? 'grid':'none'}}> 
                        <ul>
                            <li id="savejson" onClick={()=> {this.setState({isSaveVisible: false})}}>JSON</li>
                            <li id="savepdf" onClick={()=> {this.setState({isSaveVisible: false})}}>PDF</li>
                            <li id="saveexcel" onClick={()=> {this.setState({isSaveVisible: false})}}>EXCEL</li>
                        </ul>
                    </div>
                    <div className="export" id="exportmenu" style={{display:this.state.isExportVisible? 'grid':'none'}}>
                        <ul>
                            <li id="exportjson" onClick={()=> {this.setState({isExportVisible: false})}}>JSON</li>
                            <li id="exportpdf" onClick={()=> {this.setState({isExportVisible: false})}}>PDF</li>
                            <li id="exportexcel" onClick={()=> {this.setState({isExportVisible: false})}}>EXCEL</li>
                        </ul>
                    </div>
                </div>
                <div id="section-four" style={{display:this.state.isSectionFourVisible?'grid':'none'}}> 
                    <div className="bg" id="bg" ></div>
                    <div id="minimize" onClick={()=> {this.setState({isSectionFourVisible: false}); this.setState({isMaximumVisible:true})}}><p> ) </p></div>
                    <div className="summary" id="summary" style={{display:this.state.isSummaryPageVisible? 'grid':'none'}} onClick={() => {this.setState({isSummaryPageVisible: false}); this.setState({isStatisticPageVisible: true})}}>
                        <h1>SUMMARY</h1>
                        <ul>
                            <li>Serial Number : </li>
                            <li>Logger Model : </li>
                            <li>Logger State : </li>
                            <li>Battery : </li>
                            <li>Sample Period : </li>
                            <li>Start Delay : </li>
                            <li>First Sample : </li>
                            <li>Last Sample : </li>
                            <li>Recorded Samples : </li>
                            <li>Tags Placed : </li>
                            <br></br>
                            <li>User Comments : </li>
                            <li id="userComment" style={{fontWeight:'normal'}}></li>
                        </ul>
                    </div>
                    <div id="summarylist"  style={{display:this.state.isSummaryPageVisible? 'grid':'none'}}>
                        <ul>
                            <li id="Serial Number"></li>
                            <li id="Logger Model"></li>
                            <li id="Logger State"></li>
                            <li id="Battery"></li>
                            <li id="Sample Period"></li>
                            <li id="Start Delay"></li>
                            <li id="First Sample"></li>
                            <li id="Last Sample"></li>
                            <li id="Recorded Samples"></li>
                            <li id="Tags Placed"></li>
                        </ul>
                    </div>
                    <div className="statistics" id="statistics"  style={{display:this.state.isStatisticPageVisible? 'grid':'none'}} onClick={()=>{this.setState(setChannelInfo(this.state))}}>
                        <h1>STATISTICS</h1>
                        <ul>
                            <li>CHANNEL </li>
                            <br></br>
                            <li>Prset Upper Limit : </li>
                            <li>Prset Lower Limit : </li>
                            <li>Mean : </li>
                            <li>MKT : </li>
                            <li>Max Recorded: </li>
                            <li>Min Recorded: </li>
                            <br></br>
                            <li>Total Sample within Limits : </li>
                            <li>Total Time within Limits : </li>
                            <li>Total Sample out of Limits : </li>
                            <li>Total Time out of Limits : </li>
                            <li>Sample above upper Limit : </li>
                            <li>Time above upper Limit : </li>
                            <li>Sample below lower Limit : </li>
                            <li>Time below lower Limit : </li>
                        </ul>
                    </div>
                    <div id="statisticslist" style={{display:this.state.isStatisticPageVisible? 'grid':'none'}}>
                        <ul>
                            <li id="channel"></li>
                            <br></br>
                            <li id="presetUpperLimit"></li>
                            <li id="presetLowerLimit"></li>
                            <li id="mean"></li>
                            <li id="MKT"></li>
                            <li id="maxRecorded"></li>
                            <li id="minRecorded"></li>
                            <br></br>
                            <li id="sampleWithinLimits"></li>
                            <li id="timeWithinLimits"></li>
                            <li id="sampleOutofLimits"></li>
                            <li id="timeOutofLimits"></li>
                            <li id="sampleAboveUpperLimits"></li>
                            <li id="timeAboveUpperLimits"></li>
                            <li id="sampleBelowLowerLimits"></li>
                            <li id="timeBelowLowerLimits"></li>
                        </ul>
                    </div>
                </div>

                <div id="maximize" style={{display:this.state.isMaximumVisible?'grid' :'none'}} onClick={()=>{{this.setState({isSectionFourVisible:true}); this.setState({isMaximumVisible:false});}}}>
                    <p>(</p>
                </div>

                <div id="contextMenu" className="context" style={{display:this.state.isContextMenuVisible?'grid':'none', left:this.left, top:this.top}} onClick={() => {{this.setState({isContextMenuVisible: false})}}}>
                    <ul>
                        <li id="SetStart" onMouseUp={SetStart}>Set Start Sample</li>
                        <li id="SetEnd" onMouseUp={SetEnd}>Set End Sample</li>
                        <li id="ClearStart" onMouseUp={ClearStart}>Clear Start Sample</li>
                        <li id="ClearEnd" onMouseUp={ClearEnd}>Clear End Sample</li>
                    </ul>
                </div>

                <div className="commentBox" id="commentBox" style={{display:this.state.isCommentBoxVisible?'grid' :'none'}}>
                    <div className="inputBox">
                        <label>User</label>
                        <input type="text" name="" required="" id="username" />
                        <label>Comment</label>
                        <input type="text" name="" required="" id="comment" />
                    </div>
                    <div>
                        <button className="submit" onClick={() => {addComment(); this.setState({isCommentBoxVisible:false})}}>SUBMIT</button>
                        <button className="submit" onClick={() => {cancel(); this.setState({isCommentBoxVisible:false})}}>CANCEL</button>
                    </div>
                </div>
                <div className="cancel" id="cancel" style={{display:this.state.isCancelBoxVisible?'grid' :'none'}}>
                    <p id="paragraph">Are you sure you want to delete this comment?</p>
                    <div>
                        <button className="submit" onClick={() => {deleteComment(); this.setState({isCancelBoxVisible:false})}}>YES</button>
                        <button className="submit" onClick={() => {cancel(); this.setState({isCancelBoxVisible:false})}}>NO</button>
                    </div>
                </div>
                
            </div>
        );
    }
}
//---------------------------------------------------------------------------------//
/*
setTheme(num) - sets color of the graph

graphBackground
*/
var channel0;
var channel1;
var tag;
var isFirstComment = true;
var dataPoint = []; //set of details, unique for each trace
var channelsize;

var chart;
var tagIndex = 100;
var startdate = 0;
var stopdate = 0;
var zoomIntervalX = 0;
var zoomIntervalY = [];
var minY = [];
var maxY = [];
var yVisible = false;
var y2Visible = false;
var visible = 0;
var clickDetected = false;
var clicknumber = 0;
var timestamp = 0;
var selectedstartdate = 0;
var selectedstopdate = 0;
var Xinfo = 0;
var removeX = 0;
var plotOptions = 0;
var navigatorenable = true;
var eventflag = false;
var isApp = false;

var id = ['CH0', 'CH1'];
var unit = [];
var lowerLimit = [];
var upperLimit = [];
var lineColor= ['#96c695','#d8b2ff'];
var lowerLimitColor = ['#017500','#602999'];
var upperLimitColor = ['#017500','#602999'];

var graphBackground = '#fdfdfd';
var graphBorder = '#d1d1d1';
var graphColor = '#fdfdfd';
var grid = '#d1d1d1';
var fontcolor = '#4c4c4c';
var fontSize = '1.5vh';
var linewidth = 1.8;
var gridwidth = 0.5;
var WithinLimitArea = '#f8f8f8';

var gray = '#bababa';
var tagColor = '#ffa500'
var commentColor = '#069935';

var isUndefined = false;
var isComment = false;

var currentJsonfile;
var currentVisibleChannel = 9999;

//Highcharts documentation : https://api.highcharts.com/highcharts/ 10/10/2019
//HighStock documentaion : https://api.highcharts.com/highstock/ 10/10/2019

//#region Zoom Button Functions
// everytime you call the "chart." , it refers to the active chart on display
// https://api.highcharts.com/class-reference/Highcharts.Axis#setExtremes
function ZoomInY() {
    if (chart.yAxis[0].min + zoomIntervalY[0] < chart.yAxis[0].max - zoomIntervalY[0])
        chart.yAxis[0].setExtremes(chart.yAxis[0].min + zoomIntervalY[0], chart.yAxis[0].max - zoomIntervalY[0], true, false)

    if (chart.yAxis[1].min + zoomIntervalY[1] < chart.yAxis[1].max - zoomIntervalY[1])
        chart.yAxis[1].setExtremes(chart.yAxis[1].min + zoomIntervalY[1], chart.yAxis[1].max - zoomIntervalY[1], true, false)
};

function ZoomOutY() {
    if (chart.yAxis[0].min > minY[0] - zoomIntervalY[0])
        chart.yAxis[0].setExtremes(chart.yAxis[0].min - zoomIntervalY[0], chart.yAxis[0].max + zoomIntervalY[0], true, false)

    if (chart.yAxis[1].min > minY[1] - zoomIntervalY[1])
        chart.yAxis[1].setExtremes(chart.yAxis[1].min - zoomIntervalY[1], chart.yAxis[1].max + zoomIntervalY[1], true, false)
};

function ZoomInX() {
    if (chart.xAxis[0].min + zoomIntervalX*1.5 < chart.xAxis[0].max - zoomIntervalX)
    {
        chart.xAxis[0].setExtremes(chart.xAxis[0].min + zoomIntervalX, chart.xAxis[0].max- zoomIntervalX, true, false);
    };
}

function ZoomOutX() {
    if ((chart.xAxis[0].min > startdate) || (chart.xAxis[0].max < stopdate))
        chart.xAxis[0].setExtremes(chart.xAxis[0].min - zoomIntervalX, chart.xAxis[0].max + zoomIntervalX, true, false);
};

function Reset() {
    chart.xAxis[0].setExtremes(startdate, stopdate, true, false)
    chart.yAxis[0].setExtremes(minY[0] - zoomIntervalY[0], maxY[0] + zoomIntervalY[0], true, false)
    chart.yAxis[1].setExtremes(minY[1] - zoomIntervalY[1], maxY[1] + zoomIntervalY[1], true, false)
};

function showLimits() {
    chart.yAxis[0].setExtremes(lowerLimit[0] - zoomIntervalY[0] / 2, upperLimit[0] + zoomIntervalY[0] / 2, true, false)
    chart.yAxis[1].setExtremes(lowerLimit[1] - zoomIntervalY[1], upperLimit[1] + zoomIntervalY[1], true, false)
};

function HideGray() {
    var hidetraces = document.querySelector('.hideAllTraces').checked;
    for (var i = 0; i < chart.series.length; i++) {
        if (chart.series[i].color === gray) {
            if (hidetraces === false)
                chart.series[i].hide();
            else
                chart.series[i].show();
        }
    }
}

function ShowAllLimit() {

    for (var i = 0; i < channelsize; i++) {
		if (document.querySelector('.showAllLimit').checked === false) {
            if (chart.series[i].color !== gray) {
                setPlotband(i);
            }
        }
        else {
            if (visible === 1) {
                if (chart.series[i].color === gray) {
                    chart.yAxis[i].removePlotBand(id[i]);
                }
            }
            else {
                chart.yAxis[0].removePlotBand('CH0');
                chart.yAxis[1].removePlotBand('CH1');
            }
        }
    }
};

function showSelectSamples() {
    chart.xAxis[0].setExtremes(selectedstartdate, selectedstopdate);
};
//#endregion

//#region ContextMenu Functions
function SetStart() {
    selectedstartdate = timestamp;
    chart.xAxis[0].removePlotBand('SetStart');

    chart.xAxis[0].addPlotBand({
		id: 'SetStart',
		from: selectedstartdate,
		to: startdate,
		color: 'rgba(112,112,112,0.5)',
		zIndex: 4
	});

    chart.xAxis[0].addPlotLine({ //lower limit
		id: 'SetStart',
		width: 1.5,
		value: selectedstartdate,
		color: "gray",
		dashStyle: 'dash',
		zIndex: 4
	});
}

function SetEnd() {
    selectedstopdate = timestamp;

    chart.xAxis[0].removePlotBand('SetEnd');

    chart.xAxis[0].addPlotBand({
		id: 'SetEnd',
		from: timestamp,
		to: stopdate,
		color: 'rgba(112,112,112,0.5)',
		zIndex: 4
	});

    chart.xAxis[0].addPlotLine({ //lower limit
		id: 'SetEnd',
		width: 1.5,
		value: timestamp,
		color: gray,
		dashStyle: 'dash',
		zIndex: 4
	});
};

function ClearStart() {
    selectedstartdate = startdate;
    chart.xAxis[0].removePlotBand('SetStart');
};

function ClearEnd() {
    selectedstopdate = stopdate;
    chart.xAxis[0].removePlotBand('SetEnd');
};
//#endregion

//This function sets the Upper, Lower limit lines and blocks for each Channel. 
function setPlotband(channelNumber) {

    chart.yAxis[channelNumber].addPlotLine({ //lower limit
        id: id[channelNumber],
        width: 1.5,
        value: lowerLimit[channelNumber],
        color: lineColor[channelNumber],
        dashStyle: 'dash',
        label: {
            text: "LOWER LIMIT : " + lowerLimit[channelNumber] + unit[channelNumber],
            align: 'right',
            x: -5,
            y: -5,
            style: {
                color: lineColor[channelNumber],
                fontSize: fontSize
            }
        },
        zIndex: 2
    });

    chart.yAxis[channelNumber].addPlotBand({
        id: id[channelNumber],
        from: lowerLimit[channelNumber],
        to: upperLimit[channelNumber],
        color: WithinLimitArea
    });

    chart.yAxis[channelNumber].addPlotLine({ //upper limit
        id: id[channelNumber],
        width: 1.5,
        value: upperLimit[channelNumber],
        color: lineColor[channelNumber], //green
        dashStyle: 'dash',
        label: {
            text: "UPPER LIMIT : " + upperLimit[channelNumber] + unit[channelNumber],
            style: {
                color: lineColor[channelNumber], //green
                fontSize: fontSize
            },
            align: 'right',
            x: -5,
            y: -5
        },
        zIndex: 2
    });
}

//These are the graph settings. 
function setSettings(jsonFile) {

    if (jsonFile.DEVICE[0].USER_SETTINGS.Fahrenheit === false)
        unit[0] = "\xB0C"; 
    else
        unit[0] = "\xB0F"

    plotOptions = {
        series: {
			stickyTracking: true,
			showInNavigator: true,
			allowPointSelect: true,
			cursor: 'pointer',
			marker: {
				enabled: true,
				radius: 1
            },
            //Point refer to points on the traces of the graph.
			point:{
				events:{
					click: function (e) {
						var lineinfo = this;
						eventflag = true;
						clicknumber++;
						if (clickDetected) 
						{
							if (e.point.options.title === undefined) 
							{
								isUndefined = true;
								Xinfo = lineinfo.x;
							}

							else if (e.point.options.title === 'COMMENT') 
							{
								isComment = true;
								removeX = lineinfo.x;
							}
							clickDetected = false;
							clicknumber = 0;
						}
						else 
						{
							clickDetected = true;
							setTimeout(function () {
								clickDetected = false;
								if (clicknumber === 1) {
									pointclickstate(lineinfo.series);
									clicknumber = 0;
								}
							}, 250);
						};
					},
					mouseOut: function () {
						timestamp = this.x;
					}
				}
            },
            //events from the traces itself. 
			events:
			{
				mouseOver: function () 
				{
					if (eventflag === false) 
					{
						chart.series[this.index].update({
							zones: [{ value: lowerLimit[this.index], color: lowerLimitColor[this.index] }, { value: upperLimit[this.index], color: lineColor[this.index] }, { color: upperLimitColor[this.index] }]
						});

						chart.yAxis[this.index].update({
							labels: {
								style: {
									color: lineColor[this.index]
								}
							}
						});

						chart.yAxis[this.index].update({
							tickColor: lineColor[this.index]
						});
					}
				},
				mouseOut: function () 
				{
					if (eventflag === false) 
					{
						var trace = this;
						if (trace.color === gray) 
						{
							chart.series[trace.index].update({
								zones: [{ color: '#d1d1d1' }, { color: '#d1d1d1' }, { color: '#d1d1d1' }]
							});

							chart.yAxis[trace.index].update({
								labels: {
									style: {
										color: '#d1d1d1'
									}
								}
							});

							chart.yAxis[trace.index].update({
								tickColor: '#d1d1d1'
							})

							if (visible === 0) 
							{
								chart.yAxis[0].removePlotBand('CH0');
								chart.yAxis[1].removePlotBand('CH1');
							};
						}
						else 
						{
							showLimit(trace);
						}
					}
                },
                //legends are the labels of the traces on top on the graph. 
				legendItemClick: function () { clickstate(this); }
			}
        }
    };

    document.getElementById("serialnumber").textContent = jsonFile.DEVICE[0].HEADER.SerialNumber;
    document.getElementById("Serial Number").textContent = jsonFile.DEVICE[0].HEADER.SerialNumber;
    document.getElementById("Logger Model").textContent = jsonFile.DEVICE[0].HEADER.Type;
    document.getElementById("Logger State").textContent = jsonFile.DEVICE[0].HEADER.State;
    document.getElementById("Battery").textContent = jsonFile.DEVICE[0].BATTERY_INFO.Battery + "%";
    document.getElementById("Sample Period").textContent = getTime(jsonFile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
    document.getElementById("Start Delay").textContent = getTime(jsonFile.DEVICE[0].USER_SETTINGS.StartDelay);
    document.getElementById("Recorded Samples").textContent = jsonFile.DEVICE[0].DATA_INFO.SamplesNumber;
    document.getElementById("userComment").textContent = jsonFile.DEVICE[0].USER_DATA.UserData;

    document.getElementById("channel").textContent = "Tempreature";
    document.getElementById("presetUpperLimit").textContent = (currentJsonfile.DEVICE[0].SENSOR.Sensor_0.limits.UpperLimit).toFixed(2) + unit[0];
    document.getElementById("presetLowerLimit").textContent = (currentJsonfile.DEVICE[0].SENSOR.Sensor_0.limits.LowerLimit).toFixed(2) + unit[0];
    document.getElementById("mean").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.Mean).toFixed(2) + unit[0];
    document.getElementById("MKT").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.MKT_C).toFixed(2) + unit[0];
    document.getElementById("maxRecorded").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.Max).toFixed(2) + unit[0];
    document.getElementById("minRecorded").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.Min).toFixed(2) + unit[0];
    document.getElementById("sampleWithinLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.WithinLimit;
    document.getElementById("timeWithinLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.WithinLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
    document.getElementById("sampleOutofLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.OutsideLimit;
    document.getElementById("timeOutofLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.OutsideLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
    document.getElementById("sampleAboveUpperLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.AboveLimit;
    document.getElementById("timeAboveUpperLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.AboveLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
    document.getElementById("sampleBelowLowerLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.BelowLimit;
    document.getElementById("timeBelowLowerLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.BelowLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
    currentVisibleChannel = 1;
}

function setChannelInfo (state)
{
    console.log("currentVisibleChannel : " + currentVisibleChannel);
    console.log("state : " + state.isStatisticPageVisible);
    if(state.isStatisticPageVisible == true)
    {
        if (channelsize > 1 && currentVisibleChannel == 1)
        {
            document.getElementById("channel").textContent = "Humidity";
            document.getElementById("presetUpperLimit").textContent = (currentJsonfile.DEVICE[0].SENSOR.Sensor_1.limits.UpperLimit).toFixed(2) + unit[1];
            document.getElementById("presetLowerLimit").textContent = (currentJsonfile.DEVICE[0].SENSOR.Sensor_1.limits.LowerLimit).toFixed(2) + unit[1];
            document.getElementById("mean").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.Mean).toFixed(2) + unit[1];
            document.getElementById("MKT").textContent = "0";
            document.getElementById("maxRecorded").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.Max).toFixed(2) + unit[1];
            document.getElementById("minRecorded").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.Min).toFixed(2) + unit[1];
            document.getElementById("sampleWithinLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.WithinLimit;
            document.getElementById("timeWithinLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.WithinLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
            document.getElementById("sampleOutofLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.OutsideLimit;
            document.getElementById("timeOutofLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.OutsideLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
            document.getElementById("sampleAboveUpperLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.AboveLimit;
            document.getElementById("timeAboveUpperLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.AboveLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
            document.getElementById("sampleBelowLowerLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.BelowLimit;
            document.getElementById("timeBelowLowerLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_1.BelowLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
            currentVisibleChannel = 0;
        }
        else
        {
            state.isSummaryPageVisible = true;
            state.isStatisticPageVisible = false;
            currentVisibleChannel = 1;
            document.getElementById("channel").textContent = "Tempreature";
            document.getElementById("presetUpperLimit").textContent = (currentJsonfile.DEVICE[0].SENSOR.Sensor_0.limits.UpperLimit).toFixed(2) + unit[0];
            document.getElementById("presetLowerLimit").textContent = (currentJsonfile.DEVICE[0].SENSOR.Sensor_0.limits.LowerLimit).toFixed(2) + unit[0];
            document.getElementById("mean").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.Mean).toFixed(2) + unit[0];
            document.getElementById("MKT").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.MKT_C).toFixed(2) + unit[0];
            document.getElementById("maxRecorded").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.Max).toFixed(2) + unit[0];
            document.getElementById("minRecorded").textContent = (currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.Min).toFixed(2) + unit[0];
            document.getElementById("sampleWithinLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.WithinLimit;
            document.getElementById("timeWithinLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.WithinLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
            document.getElementById("sampleOutofLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.OutsideLimit;
            document.getElementById("timeOutofLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.OutsideLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
            document.getElementById("sampleAboveUpperLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.AboveLimit;
            document.getElementById("timeAboveUpperLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.AboveLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
            document.getElementById("sampleBelowLowerLimits").textContent = currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.BelowLimit;
            document.getElementById("timeBelowLowerLimits").textContent = getTime(currentJsonfile.DEVICE[0].STATISTICS.Sensor_0.BelowLimit*currentJsonfile.DEVICE[0].USER_SETTINGS.SamplingPeriod);
        }
    }
    return state;

}

//On DoubleClick 
function DoubleClick(state) 
{
    if (isUndefined) {
        state.isCommentBoxVisible = true;
        state.isCancelBoxVisible = false;
    }
    else if (isComment) {
        state.isCancelBoxVisible = true;
        state.isCommentBoxVisible = false;
    }

    isUndefined = false;
    isComment = false;

    return state;
}

//#region Retrieve data from jsonFile
function getData(jsonFile) {
	channelSetUp(jsonFile);
	inputDataforChannel(jsonFile,dataPoint);
    return dataPoint;
}

//Setting up the respective channels, with stats, color and id.
function channelSetUp (jsonFile)
{
	channelsize = jsonFile.DEVICE[0].SENSOR.SensorNumber;
	for (var i = 0; i < channelsize; i++) {
        if (i === 0) {
            yVisible = true;
			visible++;
			
			channel0 = jsonFile.DEVICE[0].SENSOR.Sensor_0.values;
            lowerLimit[i] = parseFloat(jsonFile.DEVICE[0].SENSOR.Sensor_0.limits.LowerLimit);
            upperLimit[i] = parseFloat(jsonFile.DEVICE[0].SENSOR.Sensor_0.limits.UpperLimit);
            
            dataPoint[i] =
			{
				id: jsonFile.DEVICE[0].HEADER.SerialNumber + unit[i],
				name: unit[i],
				color: lineColor[i],
				lineWidth: linewidth,
				data: [],
				zones:
				[{
					value: lowerLimit[i],      //< -10
					color: lowerLimitColor[i]
				}, {
					value: upperLimit[i],       // < 10
					color: lineColor[i] //yellow
				}, {
					color: upperLimitColor[i]
				}],
				yAxis: 0
			}

			if (jsonFile.DEVICE[0].SENSOR.Sensor_0.tag !== undefined) 
			{
                tag = jsonFile.DEVICE[0].SENSOR.Sensor_0.tag;
                tagIndex = channelsize;
                dataPoint[channelsize] =
				{
					id: 'TAG',
					name: 'TAG',
					type: 'flags',
					data: [],
					shape: 'squarepin',
					color: tagColor,
					fillColor: tagColor,
					style: {
						color: 'white'
					}
				};
            }
        }
		else if ((i === 1) && (dataPoint[i] === undefined)) 
		{
            lowerLimit[i] = parseFloat(jsonFile.DEVICE[0].SENSOR.Sensor_1.limits.LowerLimit);
			upperLimit[i] = parseFloat(jsonFile.DEVICE[0].SENSOR.Sensor_1.limits.UpperLimit);
			channel1 = jsonFile.DEVICE[0].SENSOR.Sensor_1.values;
			
            y2Visible = true;
            unit[i] = "%";
			visible++;
			dataPoint[i] =
			{
				id: jsonFile.DEVICE[0].HEADER.SerialNumber + unit[i],
				name: unit[i],
				color: gray,
				lineWidth: linewidth,
				data: [],
				zones: [{
					value: lowerLimit[i],
					color: lowerLimitColor[i]
				}, {
					value: upperLimit[i],
					color: lineColor[i]
				}, {
					color: upperLimitColor[i]
				}],
				yAxis: 1
			}
        }
	}
	return dataPoint;
}

//calculating and assigning data to each channel
function inputDataforChannel(jsonFile,dataPoint)
{
	var firstSampleAt = jsonFile.DEVICE[0].SENSOR.Sensor_0.FirstSampleAt;;
    var samplingPeriod = jsonFile.DEVICE[0].SENSOR.Sensor_0.SamplingPeriod;
    var sampleSize = jsonFile.DEVICE[0].DATA_INFO.SamplesNumber;
	
	var j = 0;
	for (var i = 0; i < sampleSize; i++) 
	{
        var x = firstSampleAt * 1000 + samplingPeriod * i;
		var y0 = parseFloat(channel0[i]);
		
        dataPoint[0].data.push([x, y0]);

		if ((channelsize > 1 && channel1 !== undefined)) 
		{
            var y1 = parseFloat(channel1[i]);
            dataPoint[1].data.push([x, y1]);
        }

		if (tag !== undefined && i === tag[j]) 
		{
            var newTag =
            {
                x: x,
                title: 'TAG',
                text: 'CH0 : ' + channel0[i] + unit[0] // + '<br> CH1 : ' + channel1[i] + channel1Unit
			}
            j++;
            dataPoint[channelsize].data.push(newTag);
        }

        if (i === 0) startdate = x;
        if (i === (sampleSize - 1)) stopdate = x;
    }
    document.getElementById("First Sample").textContent = startdate; //new Date(startdate);
    document.getElementById("Last Sample").textContent = stopdate; //new Date(stopdate);
    if(tag !== undefined)
    {
        document.getElementById("Tags Placed").textContent = tag.length;
    }
    else
    {
        document.getElementById("Tags Placed").textContent = "0";
    }
}
//#endregion

//Sets Limits of graph from the jsonFile
function setLimits(jsonfile) {

    minY[0] = chart.yAxis[0].dataMin;
    maxY[0] = chart.yAxis[0].dataMax;
    minY[1] = chart.yAxis[1].dataMin;
    maxY[1] = chart.yAxis[1].dataMax;
    zoomIntervalX = (stopdate - startdate) / 20;
    zoomIntervalY[0] = (maxY[0] - minY[0]) / 10;
    zoomIntervalY[1] = (maxY[1] - minY[1]) / 10;
    selectedstartdate = chart.xAxis[0].dataMin;
    selectedstopdate = chart.xAxis[0].dataMax;

    chart.update({
        yAxis:
		[{
			min: minY[0] - zoomIntervalY[0],
			max: maxY[0] + zoomIntervalY[0]
		},
		{
			min: minY[1] - zoomIntervalY[1],
			max: maxY[1] + zoomIntervalY[1]
		}]
    });


    if ((minY[0] < lowerLimit[0]) || (maxY[0] > upperLimit[0]) || (minY[1] < lowerLimit[1]) || (maxY[1] > upperLimit[1])) {
        var image = document.getElementById("image");
        image.src = "https://www.temprecord.com/Graph/Images/redWarning.png"
    }

    if (jsonfile.DEVICE[0].zoom !== undefined) {
        var zoom = jsonfile.DEVICE[0].zoom;
        chart.xAxis[0].setExtremes(zoom.startdate, zoom.stopdate);
        chart.yAxis[0].setExtremes(zoom.y0min, zoom.y0max);
        chart.yAxis[0].setExtremes(zoom.y1min, zoom.y1max);

        document.querySelector('.hideAllTraces').checked = zoom.hidegray;
        document.querySelector('.hideAllTraces').checked = zoom.showalllimits;
    }

    if (isApp === true) {
        chart.update({
            series: [{}, {
                zones: [{ value: lowerLimit[1], color: lowerLimitColor }, { value: upperLimit[1], color: lineColor[1] }, { color: upperLimitColor[1] }],
                width: 2,
                color: lineColor[1]
            }],
            yAxis: [{}, {
                labels: {
                    style: {
                        color: lineColor[1]
                    }
                },
                tickColor: lineColor[1]
            }]
        });
        setPlotband(1);
    }

}

//triggered with legend clicked
function clickstate(line) {
    if (line.visible === true) {
        if (line.color === gray) {
            visible++;
            select(line.index);
            showLimit(line);
            line.setVisible();
        }
        else {
            visible--;
            deselect(line.index);
            line.setVisible();
            if (document.querySelector('.hideAllTraces').checked === true)
                line.show();
        }
    }
    else {
        visible++;
        select(line.index);
        showLimit(line);
    }
}

//When a point on a trace is clicked on
function pointclickstate(line) {
    if ((line.index !== tagIndex) && (line.name !== 'COMMENT')) {
        if (line.visible === true) {
            if (line.color === gray) {
                visible++;
                select(line.index);
                showLimit(line);
            }
            else {
                visible--;
                deselect(line.index);
                if (document.querySelector('.hideAllTraces').checked === true)
                    line.hide();
            }
        }
    }
    eventflag = false;
}

//"showAllLimit" is checked and triggered.
function showLimit(line) {
    if (document.querySelector('.showAllLimit').checked === true) {
		setPlotband(line.index);
    }
    else {
        if (visible === 1) {
            setPlotband(line.index);
        }
        else {
            chart.yAxis[0].removePlotBand('CH0');
            chart.yAxis[1].removePlotBand('CH1');
        }
    }
}

//Activiates the "Clicked" traces
function select(index) {
    if (index === 0) {
        chart.update({
            series: [{
                zones: [{ value: lowerLimit[index], color: lowerLimitColor[index] }, { value: upperLimit[index], color: lineColor[index] }, { color: upperLimitColor[index] }],
                width: 2,
                color: lineColor[index]
            }, {}],
            yAxis: [{
                labels: {
                    style: {
                        color: lineColor[index]
                    }
                },
                tickColor: lineColor[index]
            }, {}]
        });
    }

    else if (index === 1) {
        if (channel1 !== undefined) {
            chart.update({
                series: [{}, {
                zones: [{ value: lowerLimit[index], color: lowerLimitColor[index] }, { value: upperLimit[index], color: lineColor[index] }, { color: upperLimitColor[index] }],
                width: 2,
                color: lineColor[index]
				}, {}],
				yAxis: [{},{
					labels: {
						style: {
							color: lineColor[index]
						}
					},
					tickColor: lineColor[index]
				}]
			});
		}
		else {
			chart.update({
				series: [{}, {
					color: tagColor,
					fillColor: tagColor
				}]
			});
		}
	}
    else {
        chart.update({
            series: [{}, {}, {
                color: commentColor,
                fillColor: commentColor
            }]
        });
    }
}

//Deactivates clicked trace. 
function deselect(index) {
    if (index === 0) {
        chart.update({
            series: [{
                zones: [{ color: '#d1d1d1' }, { color: '#d1d1d1' }, { color: '#d1d1d1' }],
                width: 3,
                color: gray
            }, {}],
            yAxis: [{
                labels: {
                    style: {
                        color: gray
                    }
                },
                tickColor: gray
            }, {}]
        });
        chart.yAxis[0].removePlotBand('CH0');
    }

    else if (index === 1) {
        if (channel1 !== undefined) {
            chart.update({
                series: [{}, {
                    zones: [{ color: '#d1d1d1' }, { color: '#d1d1d1' }, { color: '#d1d1d1' }],
                    width: 3,
                    color: gray
                }],
                yAxis: [{}, {
                    labels: {
                        style: {
                            color: gray
                        }
                    },
                    tickColor: gray
                }]
            });

            chart.yAxis[1].removePlotBand('CH1');
        }
        else {
            chart.update({
                series: [{}, {
                    color: gray,
                    fillColor: gray
                }]
            });
        }
    }
    else {
        chart.update({
            series: [{}, {}, {
                color: gray,
                fillColor: gray
            }]
        });
    }
}

//add Comment button
function addComment() {
    var username = document.getElementById("username").value;
    var comment = document.getElementById("comment").value;

    if (isFirstComment) {
        isFirstComment = false;
        var commentInit =
        {
            id: 'COMMENT' + chart.series.length,
            name: 'COMMENT',
            type: 'flags',
            data: [],
            shape: 'squarepin',
            color: commentColor,
            fillColor: commentColor,
            style: {
                color: 'white'
            }
        };

        dataPoint[dataPoint.length] = commentInit;
        chart.addSeries(commentInit);
    }

    if (comment.length > 0) {
        var commentinit =
        {
            x: Xinfo,
            title: 'COMMENT',
            text: '<b>USER:</b> ' + username + '<br>' + '<b>COMMENT: </b>' + comment + ' <br>'
        }

        dataPoint[dataPoint.length - 1].data.push(commentinit);
    }

    chart.update({
        series: dataPoint[dataPoint.length - 1]
    });

    cancel();

};

//delete comment button
function deleteComment() {
    for (var a = 0; a < chart.series.length; a++) {
        if (chart.series[a].name === "COMMENT") {
            for (var b = 0; b < chart.series[a].data.length; b++) {
                if (chart.series[a].data[b].x === removeX) {
                    chart.series[a].data[b].remove();

                    if (chart.series[a].data.length === 0) {
                        chart.series[a].remove();
                        isFirstComment = true;
                    }
                    break;
                }
            }
        }
    }
};

//cancel button
function cancel() {
    document.getElementById("username").value = "";
    document.getElementById("comment").value = "";
};

//if ever, you want to export the data back to json.
/*function createJSON() {
    var channel = 0
    var buildJson = {};
    buildJson["header"] = {};
    buildJson["channel"] = [{}];
    buildJson["zoom"] = {
        "startdate": startdate,
        "stopdate": stopdate,
        "selectedstartdate": selectedstartdate,
        "selectedstopdate": selectedstopdate,
        "xviewmin": chart.xAxis[0].min,
        "xviewmax": chart.xAxis[0].max,
        "y0min": chart.yAxis[0].min,
        "y0max": chart.yAxis[0].max,
        "y1min": chart.yAxis[1].min,
        "y1max": chart.yAxis[1].max,
        "hidegray": document.querySelector('.hideAllTraces').checked,
        "showalllimtis": document.querySelector('.showAllLimit').checked
    };


    for (var i = 0; i < chart.series.length / 2; i++) {
        channel =
		{
			"name": chart.series[i].name,
			"chstate": chart.series[i].color,
			"value": chart.series[i].data
		}
        buildJson["channel"].push(channel);
    }

    var addheader = { "DEVICE": [buildJson] }
    sendJson = JSON.stringify(addheader);
    alert(sendJson);
}
*/

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    // Loop through the FileList and populate the 'outputTable' with the data
    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                document.getElementById('maximize').style.display = 'grid';
                var jsonfile = JSON.parse(e.target.result);
                currentJsonfile = jsonfile;
                setSettings(jsonfile);
                var data = getData(jsonfile)
                /*
                Initializes the graph itself. 
                Graph Library: HIGHCHARTS
                function details can be found on website above.
                */
                chart = Highcharts.stockChart('container', {

                    //pre-set ranges for zoom 
                    //disabled to allowed custom zoom. 
                    rangeSelector: {
                        enabled: false
                    },

                    //preview bar at the bottom of the graph
                    navigator: {
                        height: 40,
                        enabled: navigatorenable
                    },

                    //graph itself
                    chart: {
                        animation: false,
                        type: 'line',
                        plotBorderWidth: 1,
                        plotBorderColor: graphBorder,
                        zoomType: 'xy',
                        panKey: 'shift',
                        backgroundColor: graphBackground,
                        style: {
                            textTransform: 'uppercase',
                            fontFamily: 'oswald',
                            fontSize: '12px'
                        },
                        resetZoomButton: {
                            theme: {
                                display: 'none'
                            }
                        }
                    },

                    tooltip: {
                        split: true,
                        crosshairs: true,
                        valueDecimals: 2
                    },

                    legend: {
                        enabled: true,
                        align: 'center',
                        backgroundColor: 'none',
                        layout: 'horizontal',
                        verticalAlign: 'top',
                        borderWidth: 0
                    },


                    xAxis: [{
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            second: '%m/%d/%Y<br> %H:%M:%S',
                            minute: '%m/%d/%Y<br> %H:%M',
                            hour: '%m/%d/%Y/<br> %H:%M',
                            day: '%m/%d/%Y<br>',
                            week: '%m/%d/%Y<br> ',
                            month: '%m/%Y ',
                            year: '%Y '
                        },
                        min: startdate,
                        max: stopdate,
                        labels: {
                            style: {
                                fontSize: fontSize,
                                color: fontcolor
                            },
                            rotation: -30
                        },
                        crosshair: true,
                        gridLineWidth: gridwidth,
                        gridLineColor: grid,
                        tickColor: graphColor,
                        tickLength: 8,
                        tickWidth: 2,
                        plotBands:
						[{
							from: startdate,
							to: stopdate,
							color: graphColor
						}]
                    }],

                    yAxis:
					[{
						visible: yVisible,
						minRange: 1,
						min: null,
						max: null,
						startOnTick: false,
						endOnTick: false,
						showLastLabel: true,
						tickColor: lineColor[0],
						tickLength: 8,
						tickWidth: 2,
						gridLineWidth: gridwidth,
						gridLineColor: grid,
						labels: {
							format: '{value}' + unit[0],
							style: {
								fontSize: fontSize,
								color: lineColor[0]
							}
						},
						opposite: false,
						crosshair: true,
						resize: {
							enabled: true
						}
					},
					{
						visible: y2Visible,
						minRange: 1,
						min: null,
						max: null,
						startOnTick: false,
						endOnTick: false,
						showLastLabel: true,
						tickColor: '#d1d1d1',
						tickLength: 8,
						tickWidth: 2,
						gridLineWidth: gridwidth,
						gridLineColor: grid,
						labels: {
							format: '{value}' + unit[1],
							style: {
								fontSize: fontSize,
								color: '#d1d1d1'
							}
						},
						opposite: true,
						resize: {
							enabled: true
						}

					}],
                    series: data,
                    plotOptions: plotOptions
                });
                setLimits(jsonfile);
                setPlotband(0);
            };
        })(f);
        reader.readAsText(f);
    }
}

function getTime (timestamp){
    var H = 0;
    var M = 0;
    var S = 0;
    var time = 0;

    if((timestamp/60) > 0)
    {
        M = parseInt((timestamp/60),10);
        if(M/60 > 0)
        {
            H = parseInt((M/60),10);
            M = parseInt(((timestamp/60)- (H*60)),10);
        }
    }
    S = timestamp-(H*60*60)-(M*60);

    H = ("0" + H).slice(-2);
    M = ("0" + M).slice(-2);
    S = ("0" + S).slice(-2);

    time = H + ":" + M + ":" + S;

    return time;
}

export default Graph