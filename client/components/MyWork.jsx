import React from 'react'

import ProjSquare from './myWork/Projects/ProjSquare'
import CodingWork from './myWork/CodingWork'
import MarketingWork from './myWork/MarketingWork'
import DesignWork from './myWork/DesignWork'
import WritingWork from './myWork/WritingWork'

export default class MyWork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCoding: true,
      showMarketing: false,
      showDesign: false,
      showWriting: false
    }
    this.codingWork = this.codingWork.bind(this)
    this.marketingWork = this.marketingWork.bind(this)
    this.designWork = this.designWork.bind(this)
    this.writingWork = this.writingWork.bind(this)
  }

  codingWork(){
    this.setState({
      showCoding: true,
      showMarketing: false,
      showDesign: false,
      showWriting: false})
    }

  marketingWork(){
    this.setState({
      showCoding: false,
      showMarketing: true,
      showDesign: false,
      showWriting: false
    })
  }

  designWork(){
    this.setState({
      showCoding: false,
      showMarketing: false,
      showDesign: true,
      showWriting: false
    })
  }

  writingWork(){
    this.setState({
      showCoding: false,
      showMarketing: false,
      showDesign: false,
      showWriting: true
    })
  }

  render() {
    return (
      <div id='work' className='work'>
        <a name="myWork"></a>
        <h1 className='section-title-white' data-aos='fade-up' data-aos-duration="800">My Work</h1>
        <div className='buttons-heading'>
          <button className={this.state.showCoding ? 'work-button' : 'work-button-inverted'} onClick={() => this.codingWork()}>Coding</button>
          <button className={this.state.showMarketing ? 'work-button' : 'work-button-inverted'} onClick={() => this.marketingWork()}>Marketing</button>
          <button className={this.state.showDesign ? 'work-button' : 'work-button-inverted'} onClick={() => this.designWork()}>Design</button>
          <button className={this.state.showWriting ? 'work-button' : 'work-button-inverted'} onClick={() => this.writingWork()}>Writing</button>
        </div>

        <div className={this.state.showCoding ? 'show' : 'hide'}>
          <CodingWork />
        </div>

        <div className={this.state.showMarketing ? 'show' : 'hide'}>
          <MarketingWork />
        </div>

        <div className={this.state.showDesign ? 'show' : 'hide'}>
          <DesignWork />
        </div>

        <div className={this.state.showWriting ? 'show' : 'hide'}>
          <WritingWork />
        </div>

      </div>
    )

  }
}
