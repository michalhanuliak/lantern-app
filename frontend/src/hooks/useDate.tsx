import Time from 'react-time-format';

const useDate = () => {
  const getReadableDate = (dateString: string) => {
    const date = new Date(dateString);
    return <Time value={date} format="DD.MM.YYYY HH:ss" />;
  };

  return { getReadableDate };
};

export default useDate;
