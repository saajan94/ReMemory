import React, { Component } from 'react';
import Header from './components/Header';
import ScoreBar from './components/ScoreBar';
import ImageCard from './components/ImageCard';
import Wrapper from './components/Wrapper';
import images from './images.json';
import './App.css';


class App extends Component {
  state = {
    score: 0,
    images,
    clickedImages: []
  };

  shuffleImages = array => {
    array.sort((a, b) => 0.5 - Math.random());
    return array;
  };

  imageClick = event => {
    console.log(event.target);
    const currentImage = event.target.alt;
    const alreadyClicked = this.state.clickedImages.indexOf(currentImage) > -1;

    if (alreadyClicked) {
      alert("You lost!");
      this.setState({
        score: 0,
        images: this.shuffleImages(images),
        clickedImages: []
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        images: this.shuffleImages(images),
        clickedImages: this.state.clickedImages.concat(currentImage)
      },
        () => {
          if (this.state.score === 12) {
            alert("You win!");
            this.setState({
              score: 0,
              images: this.shuffleImages(images),
              clickedImages: []
            });
          }
        });
    }
  };

  render() {
    return (
      <div>
        <Header
          title="ReMemory: GoT Edition"
          description="A memory game made with React.js"
          rules="Click on an image to earn points, but remember not to click an image more than once!"
        />
        <ScoreBar score={this.state.score} />
        <Wrapper>
          {this.state.images.map(image => (
            <ImageCard
              imageClicked={this.imageClick}
              id={image.id}
              key={image.id}
              image={image.imageURL}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
