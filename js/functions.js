const isFeasible = (workStart, workFinish, meetingStart, meetingDuration) => {
  const convertToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStartMinutes = convertToMinutes(workStart);
  const workFinishMinutes = convertToMinutes(workFinish);
  const meetingStartMinutes = convertToMinutes(meetingStart);
  const meetingFinishMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingFinishMinutes <= workFinishMinutes;
};

isFeasible('08:00', '17:30', '14:00', 90);
isFeasible('8:0', '10:0', '8:0', 120);
isFeasible('08:00', '14:30', '14:00', 90);
isFeasible('14:00', '17:30', '08:0', 90);
isFeasible('8:00', '17:30', '08:00', 900);
