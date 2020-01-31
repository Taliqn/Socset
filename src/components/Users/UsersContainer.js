import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from './../../assets/images/832.svg';


class UsersContainer extends React.Component {

    componentDidMount() {
this.props.toggleIsFetching(true );
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false );
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true );
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false );
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return  <>
            { this.props.isFetching ? <img src={Preloader} /> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
                      </>

    }
}


let mapStateToProps = (state) => {
    return {
             users: state.usersPage.users,
             pageSize: state.usersPage.pageSize,
             totalUsersCount: state.usersPage.totalUsersCount,
             currentPage: state.usersPage.currentPage,
             isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid));
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid));
        },
            setUsers: (users) => {
                dispatch(setUsersAC(users));
            },
                setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
                },
                setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
                },
        toggleIsFetching: (IsFetching) => {
            dispatch (toggleIsFetchingAC(IsFetching))
        }
            }

    }

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);