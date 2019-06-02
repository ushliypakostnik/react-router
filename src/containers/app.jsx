import React, { Component } from "react";
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

/* eslint-disable no-unused-vars */
import { render } from 'react-dom';
import ReactResizeDetector from 'react-resize-detector';
import Header from './header';
import Page from './page';

import { fetchAlbums, setMinHeight } from '../store/actions.js';

import Resize from '../components/resize';
import ScreenHelper from '../js/screen-helper';

// Styles
import '../normalize.css';
import { StyleBase } from '../scss/_stylebase.scss';
import '../scss/layouts/_app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      minHeight: this.getMinHeight()
    };
  }

  getMinHeight = () => {
    if (ScreenHelper.getScrollbarWidth() > 0) {
      return window.innerHeight - 50 + 'px';
    } else {
      return 'auto';
    }
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*eslint eqeqeq:0*/
    if ((this.state.minHeight === 'auto' && nextState.minHeight != 'auto') ||
        (nextState.minHeight === 'auto' && this.state.minHeight != 'auto')) {
      return true;
    } else {
      return this.state.minHeight === nextState.minHeight;
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    albums: nextProps.albums,
    minHeight: nextProps.minHeight
  });

  render() {
    const { albums, minHeight } = this.state;

    return (
      <div className="app">
        <Resize>
          <ReactResizeDetector handleHeight onResize={this.onResize} />
        </Resize>
        <Header items={albums} />
        <Switch>
          {albums.map((item, index) => {
            return <Route
              exact={index > 0 ? false : true}
              key={index}
              path={item.path}
              component={props => <Page {...props}
                                    path={item.text}
                                    minHeight={minHeight}
                                  />}
            />
          })}
        </Switch>
      </div>
    );
  }

  onResize = () => {
    this.props.setMinHeight(this.getMinHeight());
  }
}

const mapStateToProps = (state) => ({
  albums: state.reducer.albums,
  minHeight: state.reducer.minHeight,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  setMinHeight: (minHeight) => dispatch(setMinHeight(minHeight))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
