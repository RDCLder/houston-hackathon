const timeAgo = function timeAgo(timestamp) {
    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime.getTime() - timestamp.getTime());
    let ago;

    if (timeDifference < 60000) {
        ago = "Just now";
    } else if (60000 <= timeDifference && timeDifference < 120000) {
        ago = `1 minute ago`;
    } else if (120000 <= timeDifference && timeDifference < 3600000) {
        let diffMinutes = Math.abs(Math.floor(timeDifference / (1000 * 60)));
        ago = `${diffMinutes} minutes ago`;
    } else if (3600000 <= timeDifference && timeDifference < 7200000) {
        ago = `1 hour ago`;
    } else if (7200000 <= timeDifference && timeDifference < 86400000) {
        let diffHours = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60)));
        ago = `${diffHours} hours ago`;
    } else if (86400000 <= timeDifference && timeDifference < 172800000) {
        ago = `1 day ago`;
    } else if (172800000 <= timeDifference && timeDifference < 2592000000) {
        let diffDays = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
        ago = `${diffDays} days ago`;
    } else if (2592000000 <= timeDifference && timeDifference < 5184000000) {
        ago = `1 month ago`;
    } else if (5184000000 <= timeDifference && timeDifference < 77760000000) {
        let diffMonths = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)));
        ago = `${diffMonths} months ago`;
    } else if (77760000000 <= timeDifference && timeDifference < 155520000000) {
        ago = `1 year ago`;
    } else if (155520000000 <= timeDifference) {
        let diffYears = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12)));
        ago = `${diffYears} years ago`;
    }
    return ago;
};

module.exports = timeAgo;