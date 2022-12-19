import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewId: 0,
  }

  onClickLeftArrow = () => {
    const {activeReviewId} = this.state

    if (activeReviewId > 0) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props

    if (activeReviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
    }
  }

  activeReviewRender = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="profile-container">
        <img src={imgUrl} className="profile-image" alt={username} />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="descreption">{description}</p>
      </div>
    )
  }

  render() {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props
    const activeReviewDetails = reviewsList[activeReviewId]
    return (
      <div className="bg-container">
        <div>
          <h1 className="main-heading">Reviews</h1>
          <div className="content-container">
            <button
              className="button"
              type="button"
              testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
                alt="left arrow"
              />
            </button>
            {this.activeReviewRender(activeReviewDetails)}
            <button
              className="button"
              type="button"
              testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
