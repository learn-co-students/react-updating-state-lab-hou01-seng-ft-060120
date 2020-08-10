import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    
    constructor() {
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p',
                }
            }
        }
    }

    handleBitBtn = () => {
        this.setState(previousState => {
            return {
                settings: {...previousState.settings, bitrate: 12}
            }
        })
    }

    handleResBtn = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() { 
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitBtn}>Bitrate to: 12</button>
                <button className="resolution" onClick={this.handleResBtn}>Resolution to: 720p</button>
            </div>
        );
    }
}
 
export default YouTubeDebugger;
