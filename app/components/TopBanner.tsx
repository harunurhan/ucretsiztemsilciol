export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white text-sm py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a className="animate-pulse" href="tel:05062365626">
            <span style={{ marginRight: 8 }}>📞</span>
            <span>{"0 506 236 56 26"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
