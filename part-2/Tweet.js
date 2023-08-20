const Tweet = (props) => (
    <div className="tweet">
      <div className="tweet-header">
        <span className="username">{props.username}</span>
        <span className="date">{props.date}</span>
      </div>
      <div className="tweet-content">
        <span className="name">{props.name}</span>
        <p className="message">{props.message}</p>
      </div>
    </div>
  );