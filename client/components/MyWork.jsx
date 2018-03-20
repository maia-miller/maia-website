import React from 'react'

import ProjSquare from './ProjSquare'
import PantryToPlate from './PantryToPlate'
import MakeMeAcro from './MakeMeAcro'
import CodingWork from './CodingWork'
import MarketingWork from './MarketingWork'
import DesignWork from './DesignWork'
import WritingWork from './WritingWork'

export default class MyWork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCoding: true,
      showMarketing: true,
      showDesign: true,
      showWriting: true
    }
    this.showAll = this.showAll.bind(this)
    this.codingWork = this.codingWork.bind(this)
    this.marketingWork = this.marketingWork.bind(this)
    this.designWork = this.designWork.bind(this)
    this.writingWork = this.writingWork.bind(this)
  }
  showAll() {
    this.setState({
      showCoding: true,
      showMarketing: true,
      showDesign: true,
      showWriting: true
    })
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
    console.log('state', this.state)
    return (
      <div id='work' className='work'>
        <div className='hero'>
          <div className='container has-text-centered'>
            <h1 className='title is-2' data-aos='fade-up' data-aos-duration="800">My Work</h1>
            <button className='button is-danger' onClick={this.showAll}>Show All</button>
            <button className='button is-danger is-inverted is-outlined' onClick={() => this.codingWork()}>Coding</button>
            <button className='button is-danger is-inverted is-outlined' onClick={() => this.marketingWork()}>Marketing</button>
            <button className='button is-danger is-inverted is-outlined' onClick={() => this.designWork()}>Design</button>
            <button className='button is-danger is-inverted is-outlined' onClick={() => this.writingWork()}>Writing</button>
          </div>
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
