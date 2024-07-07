import styled from "styled-components";
import Heading from "../ui/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { about } from "../data/about";

const StyledTimeLine = styled.ul`
  padding: 20px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  position: relative;
  --tl-after-height: 100%;
  --tl-after-bottom: unset;
  --small-box-opacity: 1;
  --card-opacity: 1;
  --time-before-opacity: 1;

  &:after {
    content: "";
    position: absolute;
    width: 2px;
    background: #3f3f3f;
    height: var(--tl-after-height);
    bottom: var(--tl-after-bottom);
    left: 50%;
  }
`;

const Time = styled.span`
  position: absolute;
  top: 40%;
  background: #1f1f1f;
  z-index: 1;
  font-weight: 500;

  &:before {
    content: "";
    position: absolute;
    background: #3f3f3f;
    height: 40px;
    bottom: 0;
    width: 2px;
    transform: translateY(-50%);
    opacity: var(--time-before-opacity);
  }
`;

const Card = styled.li`
  position: relative;
  height: 100px;
  grid-row-start: ${(props) => props.i + 1};

  & > div {
    background: #1f1f1f;
    box-shadow: 0 0 2px 0 #fff, 0 0 1.25rem 0 rgba(0, 0, 0, 0.4);
    padding: 1rem 1.25rem;
    border-radius: 4px;
    position: relative;
    z-index: 1;
    opacity: var(--card-opacity);

    ${Heading} {
      color: #61892f;
      font-weight: 500;
    }

    small {
      font-size: 0.75rem;
      display: block;
    }
  }

  &:before {
    content: "";
    position: absolute;
    height: 25px;
    width: 25px;
    box-shadow: 0 0 2px 0 #fff;
    background: #3f3f3f;
    transform: translate(-45%, -55%);
    opacity: var(--small-box-opacity);
  }

  &:nth-child(odd) {
    text-align: right;
    padding-right: 3rem;
    justify-self: right;

    &:after,
    ${Time} {
      right: -2px;
    }

    ${Time} {
      transform: translateX(80%);

      &:before {
        rotate: -40deg;
      }
    }
  }
  &:nth-child(even) {
    justify-self: left;
    padding-left: 3rem;
    grid-column-start: 2;

    &:after,
    ${Time} {
      left: 0;
    }

    ${Time} {
      transform: translateX(-80%);

      &:before {
        rotate: 40deg;
        right: 0;
      }
    }
  }
`;

const Container = styled.div`
  @media (max-width: 1060px) {
    max-height: calc(100vh - 320px);
    overflow: auto;

    ${StyledTimeLine} {
      max-width: 90%;
      margin: 0 auto;
      grid-template-columns: 1fr;

      &:after {
        left: 22px;
      }

      ${Card} {
        &:nth-child(odd),
        &:nth-child(even) {
          justify-self: stretch;
          grid-column-start: unset;
          text-align: left;
          padding: 0 0 0 3.5rem;

          &:after,
          ${Time} {
            left: 0;
            right: unset;
          }

          ${Time} {
            transform: translateX(-50%);

            &:before {
              rotate: 40deg;
              right: 0;
            }
          }
        }
      }
    }

    &::-webkit-scrollbar {
      width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
  }

  @media (max-width: 700px) {
    ${Heading} {
      font-size: 14px;
    }
  }

  @media (min-height: 1000px) {
    padding-top: 10rem;
  }
`;

function TimeLine() {
  const timeLineRef = useRef();

  useGSAP(
    () => {
      if (timeLineRef.current) {
        const tlCards = Array.from(timeLineRef.current.children).map(
          (cards) => cards
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: timeLineRef.current,
            start: "top 60%",
            end: "top 10%",
            toggleActions: "restart none none reverse",
          },
        });

        tl.from(timeLineRef.current, {
          "--tl-after-height": "0",
          "--tl-after-bottom": "0",
          duration: 2,
        });

        tlCards.reverse().forEach((card) => {
          tl.from(card, {
            "--time-before-opacity": "0",
            duration: 0.5,
            stagger: 0.1,
          })
            .from(
              card,
              {
                "--small-box-opacity": "0",
                duration: 0.3,
                repeat: 1,
              },
              "<"
            )
            .from(card, {
              "--card-opacity": "0",
            });
        });
      }
    },
    { scope: timeLineRef }
  );

  return (
    <Container>
      <StyledTimeLine ref={timeLineRef}>
        {about.map((data, i) => (
          <Card key={`data-${i}`} i={i}>
            <Time>{data.time}</Time>
            <div>
              <Heading as="h4">{data.title}</Heading>
              <small>{data.timeSpan}</small>
              {data.highlight && <small>{data.highlight}</small>}
            </div>
          </Card>
        ))}
      </StyledTimeLine>
    </Container>
  );
}

export default TimeLine;
