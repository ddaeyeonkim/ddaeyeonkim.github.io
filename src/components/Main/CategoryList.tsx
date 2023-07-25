import React, { FC } from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"

export type CategoryListProps = {
    selectedCategory: string
    categoryList: {
        [key: string]: number
    }
}

type CategoryItemProps = {
    active: boolean
}

type GatsbyLinkProps = {
    children: React.ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps

const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 0 auto;
    padding: 20px 0;

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px 20px;
    }
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
))`
    margin-right: 8px;
    padding: 5px 8px;
    font-size: 14px;
    font-weight: ${({ active }) => (active ? "600" : "400")};
    color: ${({ active }) => (active ? "#000" : "#777")};
    border: 1px solid ${({ active }) => (active ? "#000" : "#777")};
    border-radius: 16px;
    cursor: pointer;

    &:last-of-type {
        margin-right: 0;
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const CategoryList: FC<CategoryListProps> = ({ selectedCategory, categoryList, }) => {
    return (
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name, count]) => (
                <CategoryItem
                    to={`/?category=${name}`}
                    active={name === selectedCategory}
                    key={name}
                >
                    #{name}{/* ({count}) */}
                </CategoryItem>
            ))}
        </CategoryListWrapper>
    )
}

export default CategoryList