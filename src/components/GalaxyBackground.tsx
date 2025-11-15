import StarField from './StarField';

export default function GalaxyBackground() {
  return (
    <>
      <div className="galaxy-bg">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>
      <StarField />
    </>
  );
}
