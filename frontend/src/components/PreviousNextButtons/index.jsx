import Button from '../Button';

export default function PreviousNextButtons({
  disablePrevious,
  disableNext,
  linkPrevious,
  linkNext,
  onPreviousClick,
  onNextClick,
}) {
  return (
    <div
      className='flex w-[100%] pt-[18px] gap-[20px] justify-center'
      // style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)', maxWidth: '800px' }}
    >
      <Button
        inputClasses='w-[50%] h-[46px]'
        disabled={disablePrevious}
        link={linkPrevious}
        onClick={onPreviousClick}
      >
        Previous
      </Button>

      <Button
        primary={true}
        inputClasses='w-[50%] h-[46px]'
        disabled={disableNext}
        link={linkNext}
        onClick={onNextClick}
      >
        Next
      </Button>
    </div>
  );
}
