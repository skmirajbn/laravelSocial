function SingleNotification({ notificationMessage }) {
  return (
    <div className="space-y-1">
      <div className="flex gap-3 items-center">
        <h3 className="text-sm">{notificationMessage}</h3>
      </div>
      <h5 className="text-xs">a few seconds ago</h5>
      <hr />
    </div>
  );
}

export default SingleNotification;
