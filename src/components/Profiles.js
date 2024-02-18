import React from "react";
import { Typography, Link, Box } from "@mui/material";
import Gfg from "../images/icons8-geeksforgeeks-48.png";
import Leetcode from "../images/leetcode.png";
import Codechef from "../images/icons8-codechef-100.png";
import Hackerrank from "../images/4373234_hackerrank_logo_logos_icon.png";
import styled from "styled-components";

const Content = styled.div`
  display: none;
`;

const Card = styled.div`
  width: 200px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Content} {
    display: block;
  }

  border: 0.1px solid #854ce6;
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const imageStyle = {
  height: "70px",
};

const CodingProfile = () => {
  const codingPlatforms = [
    {
      name: "LeetCode",
      image: Leetcode,
      link: "https://leetcode.com/deadpool1205/",
      secondaryContent:
        "Attained contest rating of 1700+ and solved over 750 diverse DSA questions",
    },
    {
      name: "GeeksforGeeks",
      image: Gfg,
      link: "https://auth.geeksforgeeks.org/user/krishnanand025/practice",
      secondaryContent:
        "Solved over 400 DSA problems and Consistent top 5% in monthly contests",
    },
    {
      name: "HackerRank",
      image: Hackerrank,
      link: "https://www.hackerrank.com/profile/krishnanand025",
      secondaryContent: "5-star rating in Problem Solving and C++",
    },
    {
      name: "CodeChef",
      image: Codechef,
      link: "https://www.codechef.com/users/deadpool2e",
      secondaryContent:
        "Consistently participated in weekly contests and Rating consistently above 1500",
    },
  ];

  return (
    <>
      <Typography
        sx={{
          fontSize: "42px",
          textAlign: "center",
          fontWeight: 600,
          marginY: "20px",
          color: (theme) => theme.text_primary,
          "@media (max-width: 768px)": {
            marginTop: "12px",
            fontSize: "32px",
          },
        }}
      >
        {" "}
        Coding Profiles
      </Typography>
      <Desc>Excelling on coding platforms demonstrates a high level of proficiency and skill in programming.</Desc>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          height: 300,
          paddingX: 10,
        }}
      >
        {codingPlatforms.map((platform, index) => (
          <a
            href={platform.link}
            key={index}
            style={{
              textDecoration: "none",
            }}
          >
            <Card key={index}>
              <Box
                component="img"
                src={platform.image}
                alt={platform.name}
                sx={imageStyle}
              />
              <Typography sx={{ 
                fontSize: "18px",
                fontWeight: 600,
                color: (theme) => theme.text_primary 

                }}>
                {platform.name}
              </Typography>
              <Content>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: (theme) => theme.text_secondary,
                    "@media only screen and (max-width: 600px)": {
                      fontSize: "14px",
                    },
                  }}
                >
                  {platform.secondaryContent}
                </Typography>
              </Content>
            </Card>
          </a>
        ))}
      </Box>
    </>
  );
};

export default CodingProfile;
