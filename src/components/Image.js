import React from 'react';


export default class Image extends React.Component  {

  constructor(props, context) {
    super(props, context);

    this.state = {
      source: this.props.url,
    };
  }

    componentWillReceiveProps(nextProps) {
    if(nextProps.url!==this.props.url){
      this.setState({
        source: nextProps.url
      });
    }
  };

    render() {
    return (
		<div className="new-image new-image-only container">
			<img src={`${this.props.url}`} className="image-slide" />
		</div>
    );
  }
}