import { useLanyard } from 'use-lanyard';

const DISCORD_ID = '292341035907153921';
const DISCORD_ASCII = [
    '░█▀▄░▀█▀░█▀▀░█▀▀░█▀█░█▀▄░█▀▄',
    '░█░█░░█░░▀▀█░█░░░█░█░█▀▄░█░█',
    '░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀░',
].join('\n');

function Lanyard() {
    const presence = useLanyard(DISCORD_ID);

    if (!presence) {
        return <p>Loading Discord presence...</p>;
    }

    return (
      <div>
        <pre>{DISCORD_ASCII}</pre>

        <p> Username: {presence.discord_user.username}#{presence.discord_user.discriminator}</p>
        <p className={`status ${presence.discord_status}`}>
          Status: {presence.discord_status.toUpperCase()}
        </p>
        {presence.activities.length > 0 ? (
          presence.activities.map((activity, index) => (
            <div key={index} className="activity">
              {activity.assets && activity.assets.large_image && (
                <img
                  src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
                  alt={activity.name}
                  width="64"
                  height="64"
                />
              )}
              <div>
                <p><strong>{activity.name}</strong></p>
                <p>{activity.details}</p>
                <p>{activity.state}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No activity</p>
        )}
      </div>
    );
}

export default Lanyard;