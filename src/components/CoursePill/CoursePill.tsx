interface CoursePillProps {
    title: string;
    isEnrolled: boolean;
  }
  
  const CoursePill: React.FC<CoursePillProps> = ({ title, isEnrolled }) => {
    return (
      <div
        style={{
          padding: '10px 20px',
          backgroundColor: isEnrolled ? '#d81b60' : '#007bff',
          color: '#fff',
          borderRadius: '25px',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </div>
    );
  };
  
  export default CoursePill;