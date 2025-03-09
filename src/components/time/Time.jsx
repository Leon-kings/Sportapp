import React, { useState, useEffect } from 'react';

function GMTTime({ formatted = false }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      if (formatted) {
        const now = new Date();
        const options = {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'UTC',
          timeZoneName: 'short',
        };
        setTime(now.toLocaleString('en-US', options));
      } else {
        setTime(new Date().toUTCString());
      }
    };

    updateTime(); // Initial update
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [formatted]);

  return <div>{time}</div>;
}

export default GMTTime;

// Example Usage in another component:

// import GMTTime from './GMTTime'; // Adjust the path as needed

// function App() {
//   return (
//     <div>
//       <h2>Current GMT Time (Basic):</h2>
//       <GMTTime />

//       <h2>Current GMT Time (Formatted):</h2>
//       <GMTTime formatted={true} />
//     </div>
//   );
// }

// export default App;